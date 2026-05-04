import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  preset: "vercel",
  compatibilityDate: "2024-04-03",
  publicAssets: [
    {
      dir: "dist/client",
      maxAge: 31536000,
    },
  ],
});
