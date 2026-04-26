import { Hono } from "hono";
import { Layout } from "./layout.tsx";

export const home = new Hono();

home.get("/home", (c) => {
  const jsx = (
    <Layout title="Goal">
      <h1>Home</h1>
      <button type="button" data-on:click="@get('/home/hal')">
        Open the pod bay doors, HAL.
      </button>
      <div id="hal">Waiting for an order...</div>
    </Layout>
  );

  return c.html(jsx);
});

home.get("/home/hal", (c) => {
  return c.html(
    <div id="hal">I'm sorry, Dave. I'm afraid I can't do that.</div>,
  );
});
