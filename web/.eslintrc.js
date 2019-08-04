module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		mocha: true,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'prettier/prettier': 1,
		'@typescript-eslint/indent': ['error', 'tab', { VariableDeclarator: 4, SwitchCase: 1 }],
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': ['warn',{ allowTypedFunctionExpressions: true }],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		eqeqeq: ['warn', 'always'],
	},
};
