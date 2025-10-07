import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solidStart(), tailwindcss()],
  assetsInclude: ["**/*.png"],
  server: {
    port: 3000
  },
  optimizeDeps: {
    // include: ["@modular-forms/solid"]
  },
  resolve: {
    noExternal: ["@modular-forms/solid"]
  }
});
