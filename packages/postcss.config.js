import postCssNesting from "postcss-nesting";

export default {
  plugins: {
    "postcss-import": {},
    "postcss-advanced-variables": {},
    "tailwindcss/nesting": postCssNesting,
    tailwindcss: {},
    "@createinc/archetype/scope": {},
    autoprefixer: {},
  },
};
