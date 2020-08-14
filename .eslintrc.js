"use strict";

module.exports = {
	env: {
		node: true,
	},
	extends: ["./index.js", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 6,
	},
	plugins: ["unicorn", "import"],
};
