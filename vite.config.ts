// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });

import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // server: {
  //   host: "127.0.0.1", // force IPv4
  //   port: 3000, // change from 5173
  // },
});
