module.exports = {
  mode: 'jit',
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    `{app,pages,components}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}`,
    // include packages if not transpiling
    `../../packages/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
