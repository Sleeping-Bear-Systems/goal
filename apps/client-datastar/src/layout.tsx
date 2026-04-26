import type { Child } from "hono/jsx";

export type LayoutProps = Readonly<{
  title: string;
  children?: Child;
}>;

export const DATASTAR_CDN_URL: string =
  "https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.1/bundles/datastar.js";

export function Layout(props: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{props.title}</title>
        <script type="module" src={DATASTAR_CDN_URL} />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
