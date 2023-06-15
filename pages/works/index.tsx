import CategoryGrid from "@/components/CategoryGrid";
import type { GetStaticProps } from "next";
import { config, Storyblok } from "@/utils/shared";
import { Story } from "@/utils/interfaces";

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await Storyblok.get("cdn/stories", {
      token: config.token,
      sort_by: "position:desc",
      starts_with: `blendem/${context.locale}/works/`,
    });

    const works: Story[] = response.data.stories;

    return {
      props: {
        works,
      },
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      props: {
        works: [],
      },
    };
  }
};

const Works = ({ works }: { works: Story[] }) => {
  return (
    <main className=" pt-20">
      <CategoryGrid works={works} />
    </main>
  );
};

export default Works;
