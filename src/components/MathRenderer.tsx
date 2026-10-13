"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = "",
  block = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return "";

    // If block=true and doesn't contain $$, wrap in $$
    let text = content;
    if (block && !text.includes("$$")) {
      text = `$$${text}$$`;
    }

    // Step 1: Replace block math $$...$$
    const blockMathRegex = /\$\$([\s\S]*?)\$\$/g;
    let processed = text.replace(blockMathRegex, (_, math) => {
      try {
        const html = katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        return `<div class="katex-block-wrapper my-3 overflow-x-auto text-center">${html}</div>`;
      } catch (err) {
        return `<pre class="text-red-500 text-xs overflow-x-auto">${math}</pre>`;
      }
    });

    // Step 2: Replace inline math $...$ (ensure not preceded by backslash)
    const inlineMathRegex = /(?<!\\)\$([^\$\n]+?)\$/g;
    processed = processed.replace(inlineMathRegex, (_, math) => {
      try {
        const html = katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
        return `<span class="katex-inline-wrapper mx-0.5">${html}</span>`;
      } catch (err) {
        return `<code class="text-red-500 text-xs">${math}</code>`;
      }
    });

    // Step 3: Parse markdown bold **text**
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-slate-100">$1</strong>');

    // Step 4: Handle line breaks
    processed = processed.replace(/\n/g, "<br />");

    return processed;
  }, [content, block]);

  return (
    <div
      className={`math-content prose-slate dark:prose-invert max-w-none leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
