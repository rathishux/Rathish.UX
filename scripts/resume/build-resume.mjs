// Renders scripts/resume/resume.html to public/Rathish-Gandhi-Resume.pdf,
// which is what the Resume button on the site links to. Edit the HTML, run
// this, commit both.
//
//   npm i -D playwright      # not a project dependency by default
//   node scripts/resume/build-resume.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(here, "resume.html");
const OUT = path.join(here, "../../public/Rathish-Gandhi-Resume.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${SRC}`, { waitUntil: "networkidle" });
// Margins must match @page in resume.html, or the layout shifts.
await page.pdf({
  path: OUT,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", bottom: "12mm", left: "13mm", right: "13mm" },
});
await browser.close();
console.log(`wrote ${OUT}`);
