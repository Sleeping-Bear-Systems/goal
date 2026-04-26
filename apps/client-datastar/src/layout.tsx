import type { Child } from "hono/jsx";

export type LayoutProps = {
  title: string;
  children?: Child;
};

export function Layout({ title, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.1/bundles/datastar.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
