require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    outfile: "build/index.js",
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  })
  .catch(() => process.exit(1));
