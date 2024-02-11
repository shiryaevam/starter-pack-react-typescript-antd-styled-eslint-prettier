import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel';

const packageJson = require("./package.json");

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "es",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            babel({ babelHelpers: 'bundled' }),
            commonjs(),
            typescript({ tsconfig: "./tsconfigRollup.json" }),
            terser(),
        ],
        external: ["react", "react-dom", "styled-components",'antd'],
    },
    {
        input: "./src/index.ts",
        output: [{ file: packageJson.types, format: "es" }],
        plugins: [dts.default()],
    }
];
