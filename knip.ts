export default {
  $schema: 'https://unpkg.com/knip@5/schema-json',
  workspaces: {
    '.': {
      entry: [],
      project: []
    },
    'apps/dashboard-builder': {
      entry: ['src/app/**/*.{ts,tsx}'],
      project: ['src/**/*.{ts,tsx}']
    },
    'libs/*': {
      entry: ['src/index.ts', 'src/index.tsx'],
      project: ['src/**/*.{ts,tsx}']
    }
  },
  ignoreDependencies: [
    '@nx/*',
    'nx',
    '@swc/core',
    '@swc/helpers',
    '@swc-node/register',
    '@types/react',
    '@types/react-dom',
    'eslint',
    'typescript'
  ]
};
