import { useEffect, useRef } from "react";
import { MergeView } from "@codemirror/merge";

type OrdinaryComparisonProps = {
  first: string;
  second: string;
};

export function OrdinaryComparison({
  first,
  second,
}: OrdinaryComparisonProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = rootRef.current;

    if (parent === null) {
      return;
    }

    const merge = new MergeView({
      a: { doc: first },
      b: { doc: second },
      parent,
      highlightChanges: true,
      gutter: true,
    });

    const editors = Array.from(
      parent.querySelectorAll<HTMLElement>(".cm-editor"),
    );

    const firstEditor = editors[0];
    const secondEditor = editors[1];

    if (firstEditor !== undefined) {
      firstEditor.setAttribute("role", "region");
      firstEditor.setAttribute("aria-label", "Documento A");
    }

    if (secondEditor !== undefined) {
      secondEditor.setAttribute("role", "region");
      secondEditor.setAttribute("aria-label", "Documento B");
    }

    merge.a.contentDOM.setAttribute("contenteditable", "false");
    merge.b.contentDOM.setAttribute("contenteditable", "false");

    return () => {
      merge.destroy();
    };
  }, [first, second]);

  return <div ref={rootRef} />;
}
