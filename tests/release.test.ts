import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { expect, test } from "vitest";

const root = resolve(".");

// Exercise our release configuration against real history without network or publication.
test.each([
	["feat: add a page", "1.3.0"],
	["fix: repair navigation", "1.2.4"],
	["docs: update setup", "1.2.4"],
	["chore: update tools", "1.2.4"],
	["feat!: change public URLs", "2.0.0"],
])(
	"prepares %s as %s without committing or tagging",
	async (message, version) => {
		const directory = await mkdtemp(join(tmpdir(), "site-release-"));
		const git = (...args: string[]) =>
			execFileSync("git", args, {
				cwd: directory,
				encoding: "utf8",
				stdio: "pipe",
			}).trim();
		try {
			await writeFile(join(directory, ".gitignore"), "node_modules\n");
			await writeFile(
				join(directory, "package.json"),
				JSON.stringify({
					name: "release-fixture",
					type: "module",
					version: "1.2.3",
				}),
			);
			await writeFile(
				join(directory, ".release-it.js"),
				await readFile(join(root, ".release-it.js")),
			);
			await writeFile(join(directory, "CHANGELOG.md"), "# Changelog\n");
			await symlink(
				join(root, "node_modules"),
				join(directory, "node_modules"),
			);
			git("init", "-b", "develop");
			git("config", "user.name", "Release test");
			git("config", "user.email", "release@example.test");
			git("config", "commit.gpgsign", "false");
			git("add", ".");
			git("commit", "-m", "chore: initial fixture");
			git("tag", "v1.2.3");
			git("init", "--bare", join(directory, ".git", "remote.git"));
			git("remote", "add", "origin", join(directory, ".git", "remote.git"));
			git("config", "branch.develop.remote", "origin");
			git("config", "branch.develop.merge", "refs/heads/develop");
			await writeFile(join(directory, "change.txt"), "Site change\n");
			git("add", ".");
			git("commit", "-m", message);
			git("push", "--set-upstream", "origin", "develop", "--tags");
			const head = git("rev-parse", "HEAD");

			execFileSync(
				process.execPath,
				[join(root, "node_modules/release-it/bin/release-it.js"), "--ci"],
				{
					cwd: directory,
					encoding: "utf8",
					timeout: 20000,
					env: { ...process.env, HUSKY: "0" },
				},
			);

			const pkg = JSON.parse(
				await readFile(join(directory, "package.json"), "utf8"),
			);
			expect(pkg.version).toBe(version);
			expect(await readFile(join(directory, "CHANGELOG.md"), "utf8")).toContain(
				version,
			);
			expect(git("rev-parse", "HEAD")).toBe(head);
			expect(git("tag", "--list")).toBe("v1.2.3");
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	},
	25000,
);
