import { initWasm, Resvg } from "@resvg/resvg-wasm";
import { Hono } from "hono";
import satori from "satori";
const app = new Hono();

let wasmIsInitialized = false;
const wasmInitializer = async () => {
  const wasmBuffer = await fetch(
    "https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm"
  ).then((res) => res.arrayBuffer());
  await initWasm(wasmBuffer);
  wasmIsInitialized = true;
};

app.get("/", async (c) => {
  const title = c.req.query("title") || "Hello, world!";
  const subtitle = c.req.query("subtitle") || "";

  const soraBuffer = await fetch(
    "https://fonts.azion.com/sora/Sora-VariableFont_wght.ttf"
  )
    .then((res) => res.arrayBuffer())
    .then((buffer) => new Uint8Array(buffer));

  if (!wasmIsInitialized) {
    await wasmInitializer();
  }

  const svg = await satori(<div style={{ color: "black" }}>hello, world</div>, {
    width: 600,
    height: 400,
    fonts: [
      {
        name: "Sora",
        // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
        data: soraBuffer,
        weight: 400,
        style: "normal",
      },
    ],
  });

  const image = new Resvg(svg).render().asPng();

  // Convert to proper Uint8Array<ArrayBuffer> type
  const pngBuffer = new Uint8Array(image);

  return c.newResponse(pngBuffer, 200, {
    "Content-Type": "image/png",
  });
});

app.fire();
