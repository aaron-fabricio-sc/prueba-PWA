module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpeg,png,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};