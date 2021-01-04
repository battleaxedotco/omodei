const libraries = require("./libraries.json");
if (!String.slug)
  String.prototype.slug = function() {
    let val = this[0].toLowerCase() + this.substring(1);
    return val
      .replace(/\s/gm, "")
      .replace(/\&.{3,5}\;/gm, "")
      .trim();
  };

function constructAsCubicBezierString(obj) {
  return `cubic-bezier(${obj.x1}, ${obj.y1}, ${obj.x2}, ${obj.y2})`;
}

function getLibraryByAuthor(name) {
  name = name.slug();
  if (!libraries[name]) {
    console.error(
      `Library of name '${name}' does not exist. Must be one of: ${Object.keys(
        libraries
      )
        .map((name) => {
          return `"${name.slug()}"`;
        })
        .join(", ")}`
    );
    return null;
  }
  return constructLibraryFromAuthor(name);
}

function constructLibraryFromAuthor(name) {
  let temp = {};
  for (let val in libraries[name.slug()]) {
    temp[val] = constructAsCubicBezierString(libraries[name.slug()][val]);
  }
  return temp;
}

function getAll() {
  let result = {};
  for (let name in libraries) {
    result[name] = {};
    for (let val in libraries[name]) {
      result[name][val] = constructAsCubicBezierString(libraries[name][val]);
    }
  }
  return result;
}

function assignAll() {
  let temp = getAll();
  for (let author in temp)
    for (let value in temp[author]) setCSS(value, temp[author][value]);
  return true;
}

function assignLibraryByAuthor(name) {
  let temp = getLibraryByAuthor(name.slug());
  for (let value in temp) setCSS(value, temp[value]);
  return true;
}

function getByName(name) {
  let found = false;
  for (let author in libraries) {
    if (!found) {
      let keys = Object.keys(libraries[author]);
      let match = keys.find((key) => {
        key == name.slug();
      });
      if (found) match = author;
    }
  }
  if (!found) {
    console.error(`No animation with name ${name.slug()} found.`);
    return null;
  }
  return constructAsCubicBezierString(libraries[match][name.slug()]);
}

/**
 * Retrieves the current value of a given CSS variable
 * @param {String} prop The target name of variable, with or without leading dashes
 */
function getCSS(prop) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
}

/**
 * Sets the value of a given CSS variable
 * @param {String} prop The target name of variable, with or without leading dashes
 * @param {String} data The new CSS value to assign to variable
 */
function setCSS(prop, data) {
  document.documentElement.style.setProperty(
    `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
    data
  );
}

const omodei = {
  getCSS: getCSS,
  setCSS: setCSS,
  getLibraryByAuthor: getLibraryByAuthor,
  getAll: getAll,
  assignAll: assignAll,
  assignLibraryByAuthor: assignLibraryByAuthor,
  getByName: getByName,
};

export default omodei;
