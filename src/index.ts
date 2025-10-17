import { svgTypes } from "@/og-svg";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import { Hono } from "hono";
const app = new Hono();
// import satori from "satori";

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

  const svg = svgTypes.default
    .replace("{{title}}", title)
    .replace("{{subtitle}}", subtitle);

  console.log(svg);

  const image = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
    font: {
      fontBuffers: [soraBuffer], // New in 2.5.0, loading custom fonts
    },
  })
    .render()
    .asPng();

  console.log("image");

  // Convert to proper Uint8Array<ArrayBuffer> type
  const pngBuffer = new Uint8Array(image);

  return c.newResponse(pngBuffer, 200, {
    "Content-Type": "image/png",
  });
});

app.fire();



