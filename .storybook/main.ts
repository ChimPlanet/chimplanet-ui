import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";
const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve!.alias = {
      "@": resolve(__dirname, "../src"),
    };
    config.define = {
      "process.env.NODE_DEBUG": false,
    };
    config.resolve?.extensions?.push(".ts", ".tsx");
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
