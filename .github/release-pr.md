This release contains the changes prepared from `develop`.

- Review the generated version in `package.json` and notes in `CHANGELOG.md`.
- Approve workflow runs if GitHub requests it, then wait for all required checks.
- Use **Create a merge commit** to merge this release into `main` and preserve its history.
- After publication, create a sync branch from the latest `develop`, merge `main` into it, and open a PR into `develop`. Merge that PR with a merge commit before preparing the next release.

Merging this PR creates the matching version tag and GitHub Release, then deploys that exact commit.
