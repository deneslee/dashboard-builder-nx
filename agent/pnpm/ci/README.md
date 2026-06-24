# pnpm CI

Only cache pnpm's store and cache directories in locations writable by trusted jobs. Do not let untrusted CI jobs write to a store or metadata cache that trusted jobs later restore. These directories are trusted caches; see the storeDir and cacheDir settings for details.

When pnpm detects that it is running in CI, it switches to frozen-lockfile mode automatically. Since v11, pnpm also fails on incompatible lockfiles in CI — if the lockfile was written by a newer pnpm major version, the install will error out instead of silently rewriting it. Upgrade your CI pnpm version to match the one used to generate the lockfile.

## Configs

- [Appveyor](https://www.appveyor.com/) CI/CD service for Windows, Linux and macOS,

- [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines)

- [Bitbucket](https://bitbucket.org/product/), Code & CI/CD, powered by AI and the Atlassian platform

- [circleci](https://circleci.com/),MCP, build optimize, Chunk monitors, troubleshoots, and optimizes your delivery pipelines, eliminating obstacles before they slow you down.

- GitHub Actions

- GitLab CI

- [Jenkins](https://www.jenkins.io/), open source automation server, provides hundreds of plugins to support building, deploying and automating any project.

- [semaphore](https://semaphore.io/), AI-native CI/CD platform for the entire software delivery workflow.

- [travis-ci](https://www.travis-ci.com/), On prem define tests and deployments in minutes, then scale up simply with parallel or multi-environment builds using Travis CI’s precision syntax—all designed with the developer experience in mind.

## Docker

FROM ghcr.io/pnpm/pnpm:11
RUN pnpm runtime set node 22 -g
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
CMD ["node", "index.js"]
