const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

// this gets the elements in our src folder
const getElements = () => {
  let allElements = [];
  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + "css"}`,
    }));

    allElements = [...allElements, ...allFiles];
  });

  return allElements;
};

// this run the node scss package to output css files
const compile = (path, filename) => {
  const outPut = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "expanded",
    outFile: "global.css",
    includePaths: [Path.resolve("src")],
  });

  Fs.writeFileSync(Path.resolve(filename), outPut.css.toString());
};

// calling above functions
compile("src/global.scss", "lib/global.css");
getElements().forEach((element) => {
  compile(element.input, element.output);
});
