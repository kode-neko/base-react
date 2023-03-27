import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import dev from "rollup-plugin-dev";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
    sourcemap: "inline",
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
      minified: true,
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": '"development"',
    }),
    dev({
      dirs: ["dist"],
      spa: true,
      port: 4001,
    }),
    image(),
    postcss({
      modules: true,
      minimize: true,
    }),
  ],
};
