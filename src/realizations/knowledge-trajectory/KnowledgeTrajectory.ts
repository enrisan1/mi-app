export type EntityKind =
  | "source"
  | "assertion"
  | "transformation"
  | "participant"
  | "action"
  | "result"
  | "objective"
  | "condition"
  | "alternative"
  | "evidence"
  | "decision";

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
  | "produces"
  | "requires"
  | "fails"
  | "satisfies"
  | "selects"
  | "justifies";

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

type DecisionReasonInput = {
  objective: KnowledgeEntity;
  mandatoryConditions: KnowledgeEntity[];
  discardedAlternatives: Array<{
    alternative: KnowledgeEntity;
    failedConditionId: string;
  }>;
  selectedAlternative: KnowledgeEntity;
  establishedConditionIds: string[];
  decisiveConditionId: string;
  decisiveEvidence: KnowledgeEntity;
  decision: KnowledgeEntity;
  resultId: string;
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

export function attachDecisionReason(
  trajectory: KnowledgeTrajectory,
  reason: DecisionReasonInput,
): KnowledgeTrajectory {
  const discardedEntities = reason.discardedAlternatives.map(
    ({ alternative }) => alternative,
  );

  const reasonEntities = [
    reason.objective,
    ...reason.mandatoryConditions,
    ...discardedEntities,
    reason.selectedAlternative,
    reason.decisiveEvidence,
    reason.decision,
  ];

  const reasonRelations: KnowledgeRelation[] = [
    ...reason.mandatoryConditions.map((condition) => ({
      from: reason.objective.id,
      to: condition.id,
      type: "requires" as const,
    })),
    ...reason.discardedAlternatives.map(
      ({ alternative, failedConditionId }) => ({
        from: alternative.id,
        to: failedConditionId,
        type: "fails" as const,
      }),
    ),
    ...reason.establishedConditionIds.map((conditionId) => ({
      from: reason.selectedAlternative.id,
      to: conditionId,
      type: "satisfies" as const,
    })),
    {
      from: reason.decisiveEvidence.id,
      to: reason.decisiveConditionId,
      type: "supports",
    },
    {
      from: reason.selectedAlternative.id,
      to: reason.decisiveConditionId,
      type: "satisfies",
    },
    {
      from: reason.decision.id,
      to: reason.selectedAlternative.id,
      type: "selects",
    },
    {
      from: reason.decision.id,
      to: reason.resultId,
      type: "justifies",
    },
  ];

  return {
    entities: [...trajectory.entities, ...reasonEntities],
    relations: [...trajectory.relations, ...reasonRelations],
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

export function traceResultReason(
  trajectory: KnowledgeTrajectory,
  resultId: string,
) {
  const justifiedBy = requiredRelation(
    trajectory,
    "justifies",
    resultId,
  );
  const decisionId = justifiedBy.from;

  const selectedByDecision = trajectory.relations.find(
    (relation) =>
      relation.type === "selects" &&
      relation.from === decisionId,
  );

  if (selectedByDecision === undefined) {
    throw new Error(`Missing selected alternative for ${decisionId}`);
  }

  const selectedAlternativeId = selectedByDecision.to;

  const decisiveSupport = trajectory.relations.find((relation) => {
    if (relation.type !== "supports") return false;

    const entity = trajectory.entities.find(
      (candidate) => candidate.id === relation.from,
    );

    return entity?.kind === "evidence";
  });

  if (decisiveSupport === undefined) {
    throw new Error("Missing decisive evidence");
  }

  const decisiveEvidenceId = decisiveSupport.from;
  const decisiveConditionId = decisiveSupport.to;

  const objective = trajectory.entities.find(
    (entity) => entity.kind === "objective",
  );

  if (objective === undefined) {
    throw new Error("Missing objective");
  }

  const mandatoryConditionIds = trajectory.relations
    .filter(
      (relation) =>
        relation.type === "requires" &&
        relation.from === objective.id,
    )
    .map((relation) => relation.to);

  const establishedConditionIds = trajectory.relations
    .filter(
      (relation) =>
        relation.type === "satisfies" &&
        relation.from === selectedAlternativeId &&
        relation.to !== decisiveConditionId,
    )
    .map((relation) => relation.to);

  const discardedAlternatives = trajectory.relations
    .filter((relation) => relation.type === "fails")
    .map((relation) => ({
      alternativeId: relation.from,
      failedConditionId: relation.to,
    }));

  return {
    objectiveId: objective.id,
    mandatoryConditionIds,
    discardedAlternatives,
    selectedAlternativeId,
    establishedConditionIds,
    decisiveConditionId,
    decisiveEvidenceId,
    decisionId,
    resultId,
  };
}
