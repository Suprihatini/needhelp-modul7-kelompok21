import { defineConfig } from "vite";
import { resolve } from "node:path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        [
          "index",
          "login",
          "katalog",
          "detail-postingan",
          "buat-postingan",
          "sukses-postingan",
          "aktivitas",
          "chat",
          "rating",
        ].map((name) => [name, resolve(import.meta.dirname, name + ".html")]),
      ),
    },
  },
});
