export default {
  $schema: 'https://unpkg.com/knip@5/schema-json',
  workspaces: {
    '.': {
      entry: [],
      project: []
    },
    'apps/dashboard-builder': {
      entry: ['src/app/**/*.{ts,tsx}'],
      project: ['src/**/*.{ts,tsx}', 'convex/**/*.ts']
    },
    'libs/ui': {
      entry: [],
      project: ['src/**/*.{ts,tsx}']
    },
    'libs/datasources': {
      entry: [],
      project: ['src/**/*.{ts,tsx}']
    }
  },
  ignoreDependencies: [
    '@nx/*',
    'nx',
    '@swc-node/register',
    '@tanstack/react-router',
    '@tanstack/start',
    'vinxi',
    '@babel/core',
    '@babel/preset-react',
    '@tanstack/router-plugin',
    '@tanstack/router-vite-plugin',
    'convex'
  ]
};
