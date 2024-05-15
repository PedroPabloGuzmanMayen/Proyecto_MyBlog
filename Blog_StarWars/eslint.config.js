import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import standardConfig from 'eslint-config-standard';

export default [
  pluginJs.configs.recommended,
  pluginReactConfig,
  standardConfig,
];

