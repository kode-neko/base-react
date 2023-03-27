import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
    sourcemap: false,
  },
  watch: {
    include: "./src/**",
    clearScreen: false,
  },
  plugins: [
    copy({
      targets: [{src: "src/index.html", dest: "dist"}],
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: "node_modules/**",
      extensions: ["ts", "tsx", "js", "jsx"],
      presets: [
        "@babel/env",
        ["@babel/preset-react", {runtime: "automatic"}],
        "@babel/preset-typescript",
      ],
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": '"production"',
    }),
    image(),
    postcss({
      modules: true,
    }),
    terser(),
  ],
};
