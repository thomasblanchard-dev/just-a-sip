const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(
      __dirname,
      '{app,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
