/* eslint-env node, es6 */

import babelrc from "babelrc-rollup"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import npm from "rollup-plugin-node-resolve"
import string from "rollup-plugin-string"

const vendor = ["vendor/**", "node_modules/**"]
const babelConfig = Object.assign(babelrc(), {exclude: vendor})

const plugins = [
  string({include: ["**/*.html", "**/*.svg"]}),
  npm({jsnext: true, main: true}),
  commonjs({include: vendor}),
  babel(babelConfig)
]

export default {
  entry: "source/app.js",
  plugins,
  targets: [{dest: "build/app.js", format: "iife"}]
}
