const fs = require("fs");
const folders = ["node_modules/", ".next/", "out/", "next-env.d.ts"];

folders.forEach((folder) => {
  fs.rmSync(folder, { recursive: true, force: true });
  console.log(`> rm -rf ${folder}`);
});

console.log("\n Done! Continue with...\n$ pnpm i\n$ pnpm run dev");
