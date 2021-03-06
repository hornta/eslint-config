"use strict";

module.exports = {
	rules: {
		"arrow-body-style": ["error"],
		"arrow-parens": ["error"],
		"arrow-spacing": ["error"],
		"constructor-super": ["error"],
		"generator-star-spacing": ["error"],
		"no-class-assign": ["error"],
		"no-confusing-arrow": ["error"],
		"no-const-assign": ["error"],
		"no-dupe-class-members": ["error"],
		"no-duplicate-imports": ["error"],
		"no-new-symbol": ["error"],
		"no-restricted-exports": ["off"],
		"no-restricted-imports": ["off"],
		"no-this-before-super": ["error"],
		"no-useless-computed-key": ["error"],
		"no-useless-constructor": ["error"],
		"no-useless-rename": ["error"],
		"no-var": ["error"],
		"object-shorthand": ["error"],
		"prefer-arrow-callback": ["error"],
		"prefer-const": ["error"],
		"prefer-destructuring": [
			"error",
			{
				// because of unicorn/no-unreadable-array-destructuring
				array: false,
				object: true,
			},
		],
		"prefer-numeric-literals": ["error"],
		"prefer-rest-params": ["error"],
		"prefer-spread": ["error"],
		"prefer-template": ["error"],
		"require-yield": ["error"],
		"rest-spread-spacing": ["error"],

		// because of import/order
		"sort-imports": ["off"],
		"symbol-description": ["error"],
		"template-curly-spacing": ["error"],
		"yield-star-spacing": ["error"],
	},
};
