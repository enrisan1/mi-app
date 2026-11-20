export type EntityKind =
  | "source"
  | "assertion"
  | "transformation"
  | "participant"
  | "action"
  | "result";

export type KnowledgeEntity = {
  id: string;
  kind: EntityKind;
  content: string;
};

export type RelationType =
  | "supports"
  | "input-to"
  | "performs"
  | "executes"
  | "produces";

export type KnowledgeRelation = {
  from: string;
  to: string;
  type: RelationType;
};

export type KnowledgeTrajectory = {
  entities: KnowledgeEntity[];
  relations: KnowledgeRelation[];
};

type CreateKnowledgeTrajectoryInput = {
  source: KnowledgeEntity;
  assertion: KnowledgeEntity;
  transformation: KnowledgeEntity;
  participant: KnowledgeEntity;
  action: KnowledgeEntity;
  result: KnowledgeEntity;
  additionalEntities?: KnowledgeEntity[];
};

export function createKnowledgeTrajectory(
  input: CreateKnowledgeTrajectoryInput,
): KnowledgeTrajectory {
  const {
    source,
    assertion,
    transformation,
    participant,
    action,
    result,
    additionalEntities = [],
  } = input;

  return {
    entities: [
      source,
      assertion,
      transformation,
      participant,
      action,
      result,
      ...additionalEntities,
    ],
    relations: [
      {
        from: source.id,
        to: assertion.id,
        type: "supports",
      },
      {
        from: assertion.id,
        to: transformation.id,
        type: "input-to",
      },
      {
        from: participant.id,
        to: action.id,
        type: "performs",
      },
      {
        from: action.id,
        to: transformation.id,
        type: "executes",
      },
      {
        from: transformation.id,
        to: result.id,
        type: "produces",
      },
    ],
  };
}

function requiredRelation(
  trajectory: KnowledgeTrajectory,
  type: RelationType,
  to: string,
): KnowledgeRelation {
  const relation = trajectory.relations.find(
    (candidate) => candidate.type === type && candidate.to === to,
  );

  if (relation === undefined) {
    throw new Error(`Missing ${type} relation to ${to}`);
  }

  return relation;
}

export function traceResult(
  trajectory: KnowledgeTrajectory,
  resultId: string,
) {
  const producedBy = requiredRelation(trajectory, "produces", resultId);
  const transformationId = producedBy.from;

  const inputTo = requiredRelation(
    trajectory,
    "input-to",
    transformationId,
  );
  const assertionId = inputTo.from;

  const supportedBy = requiredRelation(
    trajectory,
    "supports",
    assertionId,
  );
  const sourceId = supportedBy.from;

  const executedBy = requiredRelation(
    trajectory,
    "executes",
    transformationId,
  );
  const actionId = executedBy.from;

  const performedBy = requiredRelation(
    trajectory,
    "performs",
    actionId,
  );
  const participantId = performedBy.from;

  return {
    sourceId,
    assertionId,
    transformationId,
    participantId,
    actionId,
    resultId,
  };
}
