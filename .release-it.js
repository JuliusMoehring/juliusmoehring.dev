import { fileURLToPath } from "node:url";

export default {
	git: {
		requireBranch: "develop",
		requireCommits: true,
		commit: false,
		tag: false,
		push: false,
		// biome-ignore lint/suspicious/noTemplateCurlyInString: release-it expands this template.
		tagName: "v${version}",
	},
	npm: {
		publish: false,
		skipChecks: true,
	},
	github: {
		release: false,
	},
	plugins: {
		"@release-it/conventional-changelog": {
			preset: {
				// Resolve the preset explicitly for package managers with isolated dependency stores.
				name: fileURLToPath(
					import.meta.resolve("conventional-changelog-conventionalcommits"),
				),
				types: [
					{
						type: "feat",
						section: "Features",
					},
					{
						type: "fix",
						section: "Bug fixes",
					},
					{
						type: "perf",
						section: "Performance",
					},
					{
						type: "refactor",
						section: "Refactoring",
					},
					{
						type: "docs",
						section: "Documentation",
					},
					{
						type: "build",
						section: "Build",
					},
					{
						type: "ci",
						section: "CI",
					},
					{
						type: "test",
						section: "Tests",
					},
					{
						type: "style",
						section: "Style",
					},
					{
						type: "chore",
						section: "Maintenance",
					},
					{
						type: "revert",
						section: "Reverts",
					},
				],
			},
			infile: "CHANGELOG.md",
		},
	},
};
