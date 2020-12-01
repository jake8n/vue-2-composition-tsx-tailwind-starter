# Vue 2 Composition API TSX Tailwind Starter 🐍

Single File Components (`.vue` files) have limited support for type checking - it is not possible to break builds if types are violated within your component template.

Defining components within TSX does not have such a limitation. This repository provides a starting point for fully type safe Vue projects, with Composition API and Tailwind CSS included as a bonus.

## Recommended usage

```bash
TARGET_FOLDER=my-new-vue-project
npx degit jake8n/vue-2-composition-tsx-tailwind-starter $TARGET_FOLDER # clone repository
cd $TARGET_FOLDER
yarn # install packages
yarn start # development server
```

## To be added

- Vue Testing Library
- ESLint
- esbuild

## Related projects

- [@vue/babel-preset-jsx](https://github.com/vuejs/jsx)
- [VTI - experimental type checking in SFC](https://vuejs.github.io/vetur/vti.html#vti)
