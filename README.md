# juliusmoehring.dev

This static site uses Astro, TypeScript, and Tailwind CSS.

## Development

Use Task 3.54.0, Nub 0.11.1, and the Node.js version in `.node-version`.

```sh
nub ci
task dev
```

Before opening a pull request, run:

```sh
task lint
task typecheck
task test
task deploy:check
```

`task test` builds the site and runs the tests. `task deploy:check` validates
packaging without publishing.

## Branches and releases

```text
feature/* → develop → release/<version> → main → v<version> → deployment
                ↑                          │
                └──── merge back via PR ────┘
```

- **Feature branches** start from `develop`. Open PRs into `develop` and squash
  merge them using Conventional Commit titles, such as `feat: add a projects page`.
- **Develop** holds the next release. Feature merges do not tag or deploy anything.
- **Release branches** freeze a snapshot of `develop` for review and stabilization.
  New features can continue on `develop` while a release is reviewed.
- **Main** holds released code. Only `release/<version>` PRs may merge into it.
  Merge release PRs with **Create a merge commit** to preserve feature history.
  Every successful release merge is tagged and deployed.

To prepare a release, open **Actions → Prepare release → Run workflow**.
The workflow checks out `develop`, checks that the previous release has been
merged back, and uses [release-it](https://github.com/release-it/release-it) with
its [Conventional Changelog plugin](https://github.com/release-it/conventional-changelog)
to calculate the version and update `package.json` and `CHANGELOG.md`.
It commits those files on `release/<version>` and opens a PR into `main`.
It never pushes directly to `develop` or `main`.

Versioning is automatic: `feat:` increases the minor version, a breaking change
increases the major version, and other Conventional Commit types increase the
patch version. The largest change since the last tag determines the bump.
`nub.lock` does not contain a root package version and needs no version update.
There is no separate Release Please PR, and no npm package is published.

Review the release PR's version and changelog. Approve its workflow runs if GitHub
shows **Approve workflows to run**, then wait for required checks before merging.
Only one release PR can be open at a time. A release branch stays frozen; rerunning
preparation does not add new features to an existing release. Make stabilization
fixes on the release branch through PRs and update the changelog if necessary.

After release, create a `sync/release-<version>` branch from the latest `develop`,
merge `main` into that branch, and open a PR back into `develop`. Use a **merge commit**.
The sync branch keeps the PR up to date even when new features have reached `develop`
during release review, without changing `main`. It carries the version, changelog,
release tag ancestry, and stabilization fixes back into development. Do this before
preparing the next release.

## GitHub setup

The repository is `JuliusMoehring/juliusmoehring.dev`.

1. Create `develop` from the current `main` and make `develop` the default branch
   so feature PRs target it by default. Preserve the existing commit history.
2. Protect both `develop` and `main` with required PRs and up-to-date branches.
   Require **Lint**, **Tests**, and **PR title**. Block direct pushes, force pushes,
   branch deletion, and protection bypasses. Do not require linear history:
   releases and synchronization need merge commits. Do not use a merge queue
   to combine releases.
3. Enable both squash merges and merge commits. In a ruleset targeting `main`,
   require **Merge** as its allowed PR merge method. Allow merge commits and squash
   merges into `develop`, since it receives both feature PRs and release synchronization.
   Use **Pull request title** as the default squash message. Disable rebase merges.
4. Under **Settings → Actions → General**, permit the workflow actions and enable
   **Allow GitHub Actions to create and approve pull requests**.
5. Set Actions repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

The **Tests** check rejects PRs into `main` unless the source is a repository
branch named `release/<package.json version>`, the version is new, and it increases
from `main`. The first release may use the existing untagged package version.
Use squash merges into `develop` for features; use merge commits for releases
into `main` and for synchronization back into `develop`.

GitHub provides `GITHUB_TOKEN`; no additional GitHub App or personal access token
is needed. Bot-created PR checks may require **Approve workflows to run**.
See GitHub's [workflow trigger rules](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

## Cloudflare setup

1. Create an API token with the **Edit Cloudflare Workers** template, scoped to
   the hosting account. Store it as `CLOUDFLARE_API_TOKEN` and that account's ID
   as `CLOUDFLARE_ACCOUNT_ID` in GitHub Actions repository secrets.
2. Ensure `juliusmoehring.dev` is an active zone in that same Cloudflare account.
3. Release the site. `wrangler.jsonc` declares the custom domain, so Wrangler
   configures it during deployment. Cloudflare creates DNS and provisions HTTPS.
   Resolve an existing conflicting CNAME before deployment.

Actions uploads the built `dist` directory to the `juliusmoehring-dev` Worker.
No Cloudflare Git integration or Pages project is needed. Its `workers.dev` URL
also remains enabled. See Cloudflare's [GitHub Actions setup](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)
and [custom domain instructions](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## First release

Install these workflows on both long-lived branches before using **Prepare release**.
For the bootstrap PR into `main`, use a branch named `release/0.0.1`, matching the
current `package.json`. Once merged and validated, it creates `v0.0.1` and deploys.
Then merge `main` back into `develop`. Subsequent releases are prepared automatically
with **Prepare release** after feature PRs merge into `develop`.
If tags or releases already exist, reconcile that history before bootstrapping;
never move or replace published tags.

## Deployment and retries

Every push to `main` runs **Release and deploy**. It validates the exact pushed
commit, creates the tag and GitHub Release for its package version, and only then
calls the reusable **Deploy to Cloudflare** workflow with the same commit SHA.
Successive release runs are queued, rather than canceling earlier pending runs.

Neither feature merges into `develop` nor opening release PRs deploys the site.
Tag and release events do not trigger another workflow; publication and deployment
run together, so they work with `GITHUB_TOKEN`.
The deployed HTML version metadata comes directly from `package.json` at build time.

If a job fails, use **Re-run failed jobs** on that release run. An existing tag
is accepted only when it points to the same commit; a published release is reused.
To redeploy an earlier release, rerun its deployment job.
