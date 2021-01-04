const fs = require("fs");
const path = require("path");
let libs = require("./librariesBARE.json");

if (!String.slug)
  String.prototype.slug = function() {
    let val = this[0].toLowerCase() + this.substring(1);
    return val
      .replace(/\s/gm, "")
      .replace(/\&.{3,5}\;/gm, "")
      .trim();
  };

async function init() {
  let temp = {};

  let finalFilePath = path.resolve("./libraries.json");

  for (let author in libs) {
    temp[author.slug()] = {};
    for (let value in libs[author])
      temp[author.slug()][value.slug()] = getVerboseValue(libs[author][value]);
  }

  await makeFile(finalFilePath, JSON.stringify(temp));
  console.log();
  console.log("JSON converted successfully");
}

function getVerboseValue(string) {
  let temp = {};
  let keys = ["x1", "y1", "x2", "y2"];
  string = string.replace("cubic-bezier(", "").replace(/\)$/, "");
  let vals = string.split(",");
  vals.forEach((val, i) => {
    temp[keys[i]] = +val;
  });
  return temp;
}

async function readFile(targetPath, verbose = true) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(targetPath), "utf-8", (err, data) => {
      if (err) reject(err);
      if (!verbose) resolve(data);
      let temp = {
        data: data,
        stats: fs.lstatSync(path.resolve(targetPath)),
      };
      resolve(temp);
    });
  });
}

function makeFile(targetPath, data, options = null) {
  return fs.writeFileSync(path.resolve(targetPath), data, options);
}

init();
