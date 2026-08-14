import type { SVGProps } from "react";

/**
 * Flutter logo.
 * Path data based on the "Simple Icons" project (CC0) — verify against
 * https://simpleicons.org/?q=flutter if pixel-perfect brand accuracy matters.
 */
export function Flutter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      aria-label="Flutter"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#02569B"
      {...props}
    >
      <path d="M14.314 0L2.3 12 6 15.7 21.684.014h-7.37zm.014 11.072L7.35 18.045l6.972 6.972h7.372l-6.973-6.973 6.973-6.972h-7.37z" />
    </svg>
  );
}
