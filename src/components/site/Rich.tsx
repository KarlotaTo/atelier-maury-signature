import { Fragment, type ReactNode } from "react";

/**
 * Affiche un texte issu du CMS avec une mise en forme minimale :
 * **gras**, *italique* et retours à la ligne.
 */
export function Rich({ text, emClassName }: { text: string; emClassName?: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {inline(line, emClassName)}
        </Fragment>
      ))}
    </>
  );
}

function inline(line: string, emClassName?: string): ReactNode[] {
  const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return emClassName ? (
        <span key={i} className={emClassName}>
          {part.slice(1, -1)}
        </span>
      ) : (
        <em key={i}>{part.slice(1, -1)}</em>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
