"use strict";

const reactRules = {
	"react/boolean-prop-naming": ["error"],
	"react/button-has-type": ["error"],
	"react/default-props-match-prop-types": ["error"],
	"react/destructuring-assignment": ["error"],
	"react/display-name": ["off"],
	"react/forbid-component-props": ["off"],
	"react/forbid-dom-props": ["off"],
	"react/forbid-elements": ["off"],
	"react/forbid-foreign-prop-types": ["error"],
	"react/function-component-definition": ["error"],
	"react/no-access-state-in-setstate": ["error"],
	"react/no-adjacent-inline-elements": ["error"],
	"react/no-array-index-key": ["error"],
	"react/no-children-prop": ["error"],
	"react/no-danger": ["error"],
	"react/no-danger-with-children": ["error"],
	"react/no-deprecated": ["error"],
	"react/no-did-mount-set-state": ["error"],
	"react/no-did-update-set-state": ["error"],
	"react/no-direct-mutation-state": ["error"],
	"react/no-find-dom-node": ["error"],
	"react/no-is-mounted": ["error"],
	"react/no-multi-comp": ["error"],
	"react/no-redundant-should-component-update": ["error"],
	"react/no-render-return-value": ["error"],
	"react/no-set-state": ["off"],
	"react/no-string-refs": ["error"],
	"react/no-this-in-sfc": ["error"],
	"react/no-typos": ["error"],
	"react/no-unescaped-entities": ["error"],
	"react/no-unknown-property": ["error"],
	"react/no-unsafe": ["error"],
	"react/no-unused-prop-types": ["error"],
	"react/no-unused-state": ["error"],
	"react/no-will-update-set-state": ["error"],
	"react/prefer-es6-class": ["error"],
	"react/prefer-read-only-props": ["off"],
	"react/prefer-stateless-function": ["error"],
	"react/prop-types": ["error"],
	"react/react-in-jsx-scope": ["error"],
	"react/require-default-props": ["error"],
	"react/require-optimization": ["error"],
	"react/require-render-return": ["error"],
	"react/self-closing-comp": ["error"],
	"react/sort-comp": ["error"],
	"react/sort-prop-types": ["error"],
	"react/state-in-constructor": ["error"],
	"react/static-property-placement": ["error"],
	"react/style-prop-object": ["error"],
	"react/void-dom-elements-no-children": ["error"],
};

// the reason some jsx rules are disabled is because prettier will handle the formatting
const jsxRules = {
	"react/jsx-boolean-value": ["error"],
	"react/jsx-child-element-spacing": ["off"],
	"react/jsx-closing-bracket-location": ["off"],
	"react/jsx-closing-tag-location": ["off"],
	"react/jsx-curly-brace-presence": ["error"],
	"react/jsx-curly-newline": ["off"],
	"react/jsx-curly-spacing": ["off"],
	"react/jsx-equals-spacing": ["error"],
	"react/jsx-filename-extension": ["error"],
	"react/jsx-first-prop-new-line": ["off"],
	"react/jsx-fragments": ["error"],
	"react/jsx-handler-names": ["error"],
	"react/jsx-indent": ["off"],
	"react/jsx-indent-props": ["off"],
	"react/jsx-key": ["error"],
	"react/jsx-max-depth": ["error"],
	"react/jsx-max-props-per-line": ["off"],
	"react/jsx-no-bind": ["error"],
	"react/jsx-no-comment-textnodes": ["error"],
	"react/jsx-no-duplicate-props": ["error"],
	"react/jsx-no-literals": ["error"],
	"react/jsx-no-script-url": ["error"],
	"react/jsx-no-target-blank": ["error"],
	"react/jsx-no-undef": ["error"],
	"react/jsx-no-useless-fragment": ["error"],
	"react/jsx-one-expression-per-line": ["off"],
	"react/jsx-pascal-case": ["error"],
	"react/jsx-props-no-multi-spaces": ["off"],
	"react/jsx-props-no-spreading": ["error"],
	"react/jsx-sort-default-props": ["error"],
	"react/jsx-sort-props": ["error"],
	"react/jsx-space-before-closing": ["off"],
	"react/jsx-tag-spacing": ["off"],
	"react/jsx-uses-react": ["error"],
	"react/jsx-uses-vars": ["error"],
	"react/jsx-wrap-multilines": ["off"],
};

const jsxa11yRules = {
	"jsx-a11y/accessible-emoji": ["error"],
	"jsx-a11y/alt-text": ["error"],
	"jsx-a11y/anchor-has-content": ["error"],
	"jsx-a11y/anchor-is-valid": ["error"],
	"jsx-a11y/aria-activedescendant-has-tabindex": ["error"],
	"jsx-a11y/aria-props": ["error"],
	"jsx-a11y/aria-proptypes": ["error"],
	"jsx-a11y/aria-role": ["error"],
	"jsx-a11y/aria-unsupported-elements": ["error"],
	"jsx-a11y/autocomplete-valid": ["error"],
	"jsx-a11y/click-events-have-key-events": ["error"],
	"jsx-a11y/heading-has-content": ["error"],
	"jsx-a11y/html-has-lang": ["error"],
	"jsx-a11y/iframe-has-title": ["error"],
	"jsx-a11y/img-redundant-alt": ["error"],
	"jsx-a11y/interactive-supports-focus": ["error"],
	"jsx-a11y/label-has-associated-control": ["error"],
	"jsx-a11y/lang": ["error"],
	"jsx-a11y/media-has-caption": ["error"],
	"jsx-a11y/mouse-events-have-key-events": ["error"],
	"jsx-a11y/no-access-key": ["error"],
	"jsx-a11y/no-autofocus": ["error"],
	"jsx-a11y/no-distracting-elements": ["error"],
	"jsx-a11y/no-interactive-element-to-noninteractive-role": ["error"],
	"jsx-a11y/no-noninteractive-element-interactions": ["error"],
	"jsx-a11y/no-noninteractive-element-to-interactive-role": ["error"],
	"jsx-a11y/no-noninteractive-tabindex": ["error"],
	"jsx-a11y/no-redundant-roles": ["error"],
	"jsx-a11y/no-static-element-interactions": ["error"],
	"jsx-a11y/role-has-required-aria-props": ["error"],
	"jsx-a11y/role-supports-aria-props": ["error"],
	"jsx-a11y/scope": ["error"],
	"jsx-a11y/tabindex-no-positive": ["error"],
};

const hookRules = {
	"react-hooks/exhaustive-deps": ["warn"],
	"react-hooks/rules-of-hooks": ["error"],
};

module.exports = {
	rules: Object.assign({}, reactRules, jsxRules, jsxa11yRules, hookRules),
};