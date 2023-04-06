const getRootWebSitePath = () => {
  var _location = document.location.toString();
  var applicationNameIndex = _location.indexOf(
    "/",
    _location.indexOf("://") + 3
  );
  var applicationName = _location.substring(0, applicationNameIndex) + "/";
  var webFolderIndex = _location.indexOf(
    "/",
    _location.indexOf(applicationName) + applicationName.length
  );
  var webFolderFullPath = _location.substring(0, webFolderIndex);

  return webFolderFullPath;
};

const versionControl = (tagName, data, color) => {
  let currentDiv;
  let _body = document.createElement("div");
  _body.style.position = "absolute";
  (_body.style.display = "flex"),
    (_body.style.bottom = "0"),
    (_body.style.left = "0"),
    (_body.style.right = "0"),
    (_body.style.height = "1rem"),
    (_body.style.width = "100%"),
    (_body.style.justifyContent = "center"),
    (_body.style.alignItems = "center"),
    (_body.style.padding = "10px"),
    (_body.style.color = "#000"),
    (_body.style.fontSize = "10px"),
    (_body.style.zIndex = "685"),
    (_body.style.background = color ? color : "#c9ced6");

  // and give it some content
  const newContent = document.createTextNode(
    `V-${data.version} - ${data.NODE} `
  );

  _body.appendChild(newContent);

  // If root name is given diff from default value (root)
  if (tagName) {
    currentDiv = document.getElementById(tagName);
    currentDiv.style.position = "relative";
  } else {
    // add the newly created element and its content into the DOM
    currentDiv = document.getElementById("root");
    currentDiv.style.position = "relative";
  }
  // currentDiv.appendChild(_body);
  document.body.insertBefore(_body, currentDiv);
};

const printVersion = (rootname, color) => {
  try {
    console.log(window.location.origin.toString());
    console.log(getRootWebSitePath());
    const _package = require("/package.json");
    console.log(_package);

    versionControl(
      rootname,
      {
        version: _package.version,
        NODE: _package.NODE_ENV || process.env.NODE_ENV,
      },
      color
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = printVersion;
// export { printVersion };
