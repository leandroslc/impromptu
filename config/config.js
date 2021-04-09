import path from 'path';

const projectName = 'impromptu';

const projects = {
  build: path.resolve(__dirname, `./build`),
};

const getOutputs = (name, outputMap) => {
  return Object.keys(projects).map(project => {
    const outputDir = path.join(projects[project], name);

    return outputMap(outputDir);
  });
};

const getFileName = (name, extension) => {
  return `${name}.${extension}`;
};

const getFileNameByExtension = (extension) => {
  return getFileName(projectName, extension);
};

const config = {
  projectName,
  getFileName,
  getFileNameByExtension,
  getOutputs,
};

export default config;
