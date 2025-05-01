
const rippleui = require('rippleui');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rippleui/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    rippleui({
      defaultTheme: 'light',
      themes: [
        {
          themeName: 'light',
          colorScheme: 'light',
        },
        {
          themeName: 'dark',
          colorScheme: 'dark',
        }
      ]
    })
  ]
};
