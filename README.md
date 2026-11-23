# juliusmoehring.dev

This static site uses Astro, TypeScript, and Tailwind CSS.

## Development

Use Task 3.54.0, Nub 0.11.1, and the Node.js version in `.node-version`.

```sh
nub ci
task dev
```

Before you submit a pull request, run these checks:

```sh
task lint
task typecheck
task test
task deploy:check
```

`task test` builds the site before it runs the tests.
`task deploy:check` checks the deployment files without a deployment.

## Releases

Use Conventional Commits for pull request titles.
Use squash merge into `main`.
Keep the title that passed the **PR title** check.

- `fix: repair navigation links` increases the patch version.
- `feat: add a projects page` increases the minor version.
- `feat!: change public URLs` increases the major version at `1.0.0` and above.
  Below `1.0.0`, a breaking change increases the minor version.
- `docs: explain setup` and `chore: update tools` do not cause a release unless they specify a breaking change.

Release Please creates or updates a release pull request after a release change reaches `main`.
Check the version, changelog, and file changes.
On the bot-created PR, select **Approve workflows to run** if GitHub requests approval.
Wait for the required checks and reviews.
Then squash merge the release pull request with its generated title.
Keep its generated description.
Release Please creates the `vX.Y.Z` tag and GitHub Release with release notes.
The project does not publish to npm.

Release Please controls `package.json`, `.release-please-manifest.json`, and `CHANGELOG.md`.
Do not change versions or add changelog entries manually.
`nub.lock` has no version field for the root package.

The first release uses `0.0.1`.
The empty manifest records no previous release.
The first `fix:` or `feat:` change starts the release process.

## GitHub setup

The GitHub repository is `JuliusMoehring/juliusmoehring.dev`.
Before you enable releases, confirm that its default branch is `main`.
Check for existing tags and releases.
If release history exists, update the release configuration to agree with that history first.
Do not replace existing tags or releases.

1. Permit the workflow actions in **Settings → Actions → General**.
   Under **Workflow permissions**, enable **Allow GitHub Actions to create and approve pull requests**.
   The release workflow requests the write permissions it needs through the built-in `GITHUB_TOKEN`.
2. Protect `main` with required pull requests.
   Require branches to be up to date.
   Require **Lint**, **Tests**, and **PR title**.
   Block force pushes and branch deletion.
   Do not permit protection bypasses.
3. Enable squash merges with **Pull request title** as the default commit message.
   Disable merge commits and rebase merges.
4. In **Settings → Secrets and variables → Actions**, set the repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` using the Cloudflare setup below.

No GitHub App, personal access token, or Release Please variable or secret is required.
GitHub provides `GITHUB_TOKEN` automatically.
If you previously configured `RELEASE_PLEASE_APP_ID` or `RELEASE_PLEASE_APP_PRIVATE_KEY`, they are no longer used.
Bot-created release PR checks may require **Approve workflows to run** before they start.
See GitHub's [workflow trigger rules](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

## Cloudflare setup

1. Create an API token using the **Edit Cloudflare Workers** template.
   Scope it to the account that will host the site.
2. Copy the token into the GitHub Actions secret `CLOUDFLARE_API_TOKEN`.
   Copy the target account ID into the GitHub Actions secret `CLOUDFLARE_ACCOUNT_ID`.
3. Ensure `juliusmoehring.dev` is an active zone in the same Cloudflare account.
4. After the first deployment, open **Workers & Pages → juliusmoehring-dev → Settings → Domains & Routes → Add → Custom Domain**.
   Add `juliusmoehring.dev`.
   Cloudflare creates the DNS record and provisions the TLS certificate.
   An existing CNAME on that hostname must be resolved before adding the custom domain.

GitHub Actions runs Wrangler to create or update the `juliusmoehring-dev` Worker and upload the built `dist` directory.
No Cloudflare Git integration or Pages project is needed.
The Worker also has a `workers.dev` URL enabled.

See Cloudflare's [GitHub Actions setup](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/) and [custom domain instructions](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## First release

Keep the existing files and commit history on `main`.
You do not need to empty the branch or move the initial project to another branch.

After completing the GitHub and Cloudflare setup:

1. Create a short-lived branch from the current `main` for the next site change.
2. Open a pull request with a release-producing title, such as `feat: add portfolio content` or `fix: repair navigation links`.
   Squash merge it after the required checks pass.
3. The **Deploy to Cloudflare** workflow validates and deploys the merged site.
   Add the custom domain after this first deployment.
4. Wait for Release Please to open its release pull request for `0.0.1`.
   Approve its workflow runs if requested, then review and squash merge it after the checks pass.
   Keep its generated title and description.
5. Merging the release PR triggers another deployment with the package version from that commit.
   Release Please also publishes the tag and GitHub Release.

The initial `chore: initial commit` and ordinary `docs:` or `chore:` changes do not start a release.
If a release-producing commit is already on `main` but its Release Please run failed before setup was complete, rerun that failed workflow after enabling the required Actions permissions.

## Deployment

Every push to `main` starts the **Deploy to Cloudflare** workflow.
It runs lint, type checks, tests, and a deployment dry run before deploying.
Pull requests run checks without deploying.
GitHub Releases and tag pushes do not trigger deployments.

Release Please updates `package.json` through release PRs; merging one deploys the new version.
The HTML `<meta name="version">` reads directly from `package.json` at build time, including local builds.
Until the next release PR is merged, ordinary site changes keep the current package version.
No version environment variable is needed.

To restore a previous deployment, rerun its successful deployment workflow.
