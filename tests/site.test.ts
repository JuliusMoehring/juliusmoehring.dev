import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { expect, test } from "vitest";

const output = resolve("dist");

test("built homepage includes accessible document metadata and content", async () => {
	const html = await readFile(resolve(output, "index.html"), "utf8");
	expect(html).toMatch(/<!doctype html>/i);
	expect(html).toMatch(/<html[^>]+lang="[^"]+"/i);
	expect(html).toMatch(/<title>[^<]+<\/title>/i);
	expect(html).toMatch(/<meta[^>]+name="viewport"/i);
	const headings = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi)];
	expect(headings).toHaveLength(1);
	const headline = headings[0][1]
		.replace(/<[^>]*>/g, " ")
		.replace(/\s+/g, " ")
		.trim();
	expect(headline).toBe("Less artificial. More useful.");
});

test("homepage local assets exist in the deployment output", async () => {
	const html = await readFile(resolve(output, "index.html"), "utf8");
	const assets = [
		...html.matchAll(/<(?:link|script|img)\b[^>]*\b(?:href|src)="([^"]+)"/gi),
	];
	expect(assets.length, "Expected homepage asset references").toBeGreaterThan(
		0,
	);
	for (const [, reference] of assets) {
		const url = new URL(reference, "https://site.example/");
		if (url.origin !== "https://site.example") continue;
		const path = resolve(output, `.${decodeURIComponent(url.pathname)}`);
		expect(path.startsWith(`${output}/`), "Asset must stay inside dist").toBe(
			true,
		);
		expect((await stat(path)).isFile(), `Missing asset: ${reference}`).toBe(
			true,
		);
	}
});

test("homepage embeds the package.json version", async () => {
	const html = await readFile(resolve(output, "index.html"), "utf8");
	const { version } = JSON.parse(await readFile("package.json", "utf8"));
	const escaped = version
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
	expect(html).toContain(`<meta name="version" content="${escaped}"`);
});
