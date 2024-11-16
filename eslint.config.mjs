import { eslintPresets, pluginImport } from '@eqian/eslint-config-preset';
export default eslintPresets([
  {
    ignores: ['eslint.config.mjs', 'prettier.config.mjs'],
    name: 'test',
  }
]);
