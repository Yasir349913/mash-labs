"use client";

import { useEffect, useState } from "react";

const lines = [
  { plain: `import { RAGPipeline } from "mashlabs/ai";` },
  { plain: `` },
  { plain: `const pipeline = new RAGPipeline({` },
  { plain: `  source: "company-docs",` },
  { plain: `  model: "claude-sonnet",` },
  { plain: `});` },
  { plain: `` },
  { plain: `export async function askAI(question: string) {` },
  { plain: `  const context = await pipeline.retrieve(question);` },
  { plain: `  return pipeline.generate(question, context);` },
  { plain: `}` },
];

function highlight(line: string) {
  const combined: { index: number; length: number; className: string }[] = [];

  const keywordRegex = /\b(import|from|const|new|export|async|function|return|await)\b/g;
  const stringRegex = /"([^"]*)"/g;

  let match;
  while ((match = keywordRegex.exec(line))) {
    combined.push({ index: match.index, length: match[0].length, className: "text-amber" });
  }
  while ((match = stringRegex.exec(line))) {
    combined.push({ index: match.index, length: match[0].length, className: "text-emerald-400" });
  }

  combined.sort((a, b) => a.index - b.index);

  const tokens: { text: string; className?: string }[] = [];
  let lastIndex = 0;

  combined.forEach((m) => {
    if (m.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, m.index) });
    }
    tokens.push({ text: line.slice(m.index, m.index + m.length), className: m.className });
    lastIndex = m.index + m.length;
  });

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex) });
  }

  return tokens;
}

export function CodeEditorAnimation() {
  const [charIndex, setCharIndex] = useState(0);
  const [showDone, setShowDone] = useState(false);

  const fullText = lines.map((l) => l.plain).join("\n");

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    function type(index: number) {
      if (index <= fullText.length) {
        setCharIndex(index);
        typingTimer = setTimeout(() => type(index + 1), 18);
      } else {
        doneTimer = setTimeout(() => {
          setShowDone(true);
          resetTimer = setTimeout(() => {
            setShowDone(false);
            type(0);
          }, 2200);
        }, 400);
      }
    }

    type(0);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(doneTimer);
      clearTimeout(resetTimer);
    };
  }, [fullText]);

  const typedText = fullText.slice(0, charIndex);
  const typedLines = typedText.split("\n");

  return (
    <div className="overflow-hidden rounded-sm border border-line bg-navy shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-xs text-white/40">ai-pipeline.ts</span>
      </div>

      <div className="min-h-[340px] px-5 py-5 font-mono text-[13px] leading-relaxed">
        {typedLines.map((line, i) => {
          const isLastLine = i === typedLines.length - 1;
          const isFullyTyped = !isLastLine || charIndex === fullText.length;
          const displayLine = line.length > 0 ? line : "\u00A0";

          if (isFullyTyped) {
            const tokens = highlight(displayLine);
            return (
              <div key={i} className="whitespace-pre text-white/90">
                {tokens.map((t, ti) => (
                  <span key={ti} className={t.className}>
                    {t.text}
                  </span>
                ))}
              </div>
            );
          }

          return (
            <div key={i} className="whitespace-pre text-white/90">
              {displayLine}
              <span className="ml-0.5 inline-block h-4 w-[2px] -translate-y-0.5 animate-pulse bg-amber" />
            </div>
          );
        })}

        {showDone && (
          <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 font-mono text-[13px] text-emerald-400">
            <span>✓</span>
            <span>Build complete — ready to deploy</span>
          </div>
        )}
      </div>
    </div>
  );
}