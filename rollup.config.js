import config from './config/config';
import sass from './config/sass-build';
import typescript from './config/typescript-build';

const isProduction = process.env.NODE_ENV === 'production';

const css = sass({
  bundleName: config.projectName,
  input: './scss/index.scss',
  watch: './scss/**/*.scss',
  production: isProduction,
});

const js = typescript({
  bundleName: config.projectName,
  input: './src/index.ts',
  watch: './src/**/*.ts',
  production: isProduction,
});

export default [
  css,
  js,
];
