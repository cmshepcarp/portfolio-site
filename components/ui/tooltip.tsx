"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

/**
 * Simple, readable tooltip wrapper.
 * - delayDuration: 150ms hover delay
 * - multiline: the content will wrap naturally
 */
export function Tooltip({
  children,
  content,
  side = "top",
  align = "center",
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={150}>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            className="
              z-50 rounded-md bg-slate-900 px-3 py-2 text-sm text-white shadow-lg
              animate-in fade-in-50
              max-w-xs leading-snug
            "
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-slate-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
