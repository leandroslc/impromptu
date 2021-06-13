import copy from './config/copy-build';
import css from './config/css-build';
import sass from './config/sass-build';

const bootstrapCSS = sass({
  bundleName: 'bootstrap',
  input: './vendor/bootstrap/scss/index.scss',
  production: true,
  watch: false,
});

const bootstrapJS = copy({
  bundleName: 'bootstrap',
  inputs: {
    ['']: [
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],
  }
});

const bootstrapIconsCSS = css({
  bundleName: 'bootstrap-icons',
  input: './node_modules/bootstrap-icons/font/bootstrap-icons.css',
  production: true,
});

const bootstrapIconsFonts = copy({
  bundleName: 'bootstrap-icons',
  inputs: {
    ['fonts']: './node_modules/bootstrap-icons/font/fonts/**/*',
  },
});

const jqueryJS = copy({
  bundleName: 'jquery',
  inputs: {
    ['']: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery/dist/jquery.slim.min.js'
    ],
  },
});

const jqueryValidationJS = copy({
  bundleName: 'jquery-validation',
  inputs: {
    ['']: [
      './node_modules/jquery-validation/dist/jquery.validate.min.js',
      './node_modules/jquery-validation/dist/additional-methods.min.js',
    ],
  },
});

export default [
  bootstrapCSS,
  bootstrapJS,
  bootstrapIconsCSS,
  bootstrapIconsFonts,
  jqueryJS,
  jqueryValidationJS,
];
