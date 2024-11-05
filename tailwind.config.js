/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./src/index.{html,js}', './src**/*.{html,js}'],
	// purge: {
	// 	enabled: process.env.NODE_ENV === 'production',
	// 	content: ['./src/index.html', './src/*.js'],
	// },
	plugins: [require('tw-elements/plugin.cjs'), require('tailwindcss'), require('autoprefixer')],
	darkMode: 'class',
	extend: {
		maxHeight: {
			128: '32rem',
			theme: {
				extend: {
					colors: {
						primary: '#1DA1F2',
						secondary: '#14171A',
					},
				},
			},
		},
	},
};
