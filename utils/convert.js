const fs = require("fs");
const path = require("path");
const jsdoc2md = require("jsdoc-to-markdown");

async function init() {
  let result = await jsdoc2md.render({ files: "./index.js" });
  let test = makeFile(
    "./README.md",
    `# omodei

It's a chore to hunt down common cubic-bezier values for CSS transitions, so why not collect all the best ones and make them easy to retrieve and use instead?

### [Check out the demo here](https://omodei.netlify.app/)

## Installation

\`\`\`bash
npm i omodei
\`\`\`

\`\`\`js
import omodei from "omodei";

omodei.assignAll(); // Sets all CSS variables
omodei.assignLibraryByAuthor("google"); // Sets all Google CSS variables
\`\`\`

---

${result}`
  );
  console.log("DONE", test);
}

init();

function makeFile(targetPath, data, options = null) {
  return fs.writeFileSync(path.resolve(targetPath), data, options);
}
