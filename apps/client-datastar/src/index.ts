import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { home } from "./home.tsx";
import { ping } from "./ping.ts";

export const app = new Hono();

app.use("/scripts/*", serveStatic({ root: "./public" }));
app.route("/api", ping);
app.route("/", home);
app.get("/", (c) => c.redirect("/home"));

export default {
  port: 3000,
  fetch: app.fetch,
};
