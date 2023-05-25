import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "../src/components/Banner";
import { ScreenTypeProvider, CPThemeProvider } from "../src/contexts";
import { baseTheme } from "../src/theme";

const ExampleBanner = () => {
  return (
    <ScreenTypeProvider screens={baseTheme.sizes}>
      <CPThemeProvider>
        <Banner
          banners={[
            {
              id: 1,
              sourceUrl:
                "http://43.201.200.221:8081/images/0bbf07c7-8f41-4fc3-99cf-ea72c3cc0bd0-3.jpg",
              redirectUrl: "https://waktatopic.netlify.app/",
            },
            {
              id: 2,
              sourceUrl:
                "http://43.201.200.221:8081/images/56243fb8-14ac-428e-809b-683fdd7c7508-g.jpg",
              redirectUrl: "https://waktatopic.netlify.app/",
            },
            {
              id: 3,
              sourceUrl:
                "http://43.201.200.221:8081/images/4d320c89-7d8e-4c40-ae33-4efc01a6bc19-w.jpg",
              redirectUrl: "https://waktatopic.netlify.app/",
            },
          ]}
        />
      </CPThemeProvider>
    </ScreenTypeProvider>
  );
};

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  render: () => <ExampleBanner />,
};
