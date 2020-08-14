"use strict";

module.exports = {
	extends: [
		// eslint
		"./src/best-practices",
		"./src/es6",
		"./src/possible-errors",
		"./src/strict",
		"./src/stylistic",
		"./src/variables",

		// eslint-plugin-import
		"./src/import",

		// eslint-plugin-unicorn
		"./src/unicorn",
	],
};
