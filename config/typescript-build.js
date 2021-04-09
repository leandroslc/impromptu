import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import config from './config';

const build = ({ bundleName, input, watch, production }) => {
  const plugins = [
    typescript(),
  ];

  if (production) {
    plugins.push(terser());
  }

  const options = {
    input: input,
    output: config.getOutputs(bundleName, outputDir => {
      return {
        file: path.join(outputDir, config.getFileName(bundleName, 'js')),
        format: 'iife',
      };
    }),
    plugins: plugins,
  };

  if (watch) {
    options.watch = {
      include: [watch],
    };
  }

  return options;
};

export default build;
