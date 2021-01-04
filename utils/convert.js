const fs = require("fs");
const path = require("path");
const jsdoc2md = require("jsdoc-to-markdown");

async function init() {
  let result = await jsdoc2md.render({ files: "./index.js" });
  let test = makeFile(
    "./README.md",
    `# omodei

It's a chore to hunt down common cubic-bezier values for CSS transitions, so why not collect over 100 of the best ones and make them easy to retrieve and use instead?

Unashamedly heavily influenced by one of my favorite AE extensions, [Flow](https://aescripts.com/flow/), one of the best tools to come out in the last few years.

### [Check out the demo here](https://omodei.netlify.app/)

![](https://github.com/Inventsable/omodei-sandbox/raw/master/src/assets/screenshot.png?raw=true)

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
