import path from 'path';
import copy from 'rollup-plugin-copy';
import config from './config';

const isArrayOrString = (value) => {
  return Array.isArray(value) || typeof value === 'string';
}

const build = ({ bundleName, inputs }) => {
  return {
    input: './index.js',
    plugins: config.getOutputs(bundleName, outputDir => {
      return copy({
        targets: Object.keys(inputs).map(destination => {
          const result = {
            dest: path.join(outputDir, destination),
          };

          const inputSource = inputs[destination];
          const inputKeys = Object.keys(inputSource);

          if (isArrayOrString(inputSource)) {
            result.src = inputSource;
          } else if (inputKeys.length) {
            result.src = inputSource[inputKeys[0]];
            result.rename = inputKeys[0];
          } else {
            throw new Error('Invalid source');
          }

          return result;
        }),
      });
    }),
    watch: {
      skipWrite: true,
    },
  };
};

export default build;
