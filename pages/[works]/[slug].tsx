import ProjectVideo from "@/components/ProjectVideo";
import TextComponent from "@/components/TextCoponent";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { Storyblok, config } from "@/utils/shared";
import { Story, WorkPageContent } from "@/utils/interfaces";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await Storyblok.get("cdn/stories", {
      token: config.token,
      sort_by: "position:desc",
      starts_with: `blendem/{0}/works/`,
    });

    const works = response.data.stories;
    const paths = works.map((work: Story & { content: WorkPageContent }) => ({
      params: { work: work.slug }, // Assuming the 'slug' property is the identifier
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

type ContextParams = {
  slug: string; // Adjust the type to match the identifier property (e.g., string)
};

interface PageProps {
  work: (Story & { content: WorkPageContent }) | null; // Adjust the property name to 'work' instead of 'works' and allow null
}

export const getStaticProps: GetStaticProps<PageProps, ContextParams> = async (
  context: GetStaticPropsContext<ContextParams>
) => {
  try {
    const response = await Storyblok.get("cdn/stories", {
      token: config.token,
      sort_by: "position:desc",
      starts_with: `blendem/${context.locale}/works/${context.params?.slug}`,
    });

    const work: (Story & { content: WorkPageContent }) | null =
      response.data.stories[0] || null; // Assign null if no work is found

    return {
      props: {
        work,
      },
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      props: {
        work: null,
      },
    } as const;
  }
};

export default function Category({
  work,
}: {
  work: Story & { content: WorkPageContent };
}) {
  console.log(work);
  const projects = [
    {
      videoUrl: "/videos/Culture_15sec.mp4",
      imgUrl: "/culture.png",
      title: "Modern art demo - Cluj",
    },
    {
      videoUrl: "/videos/royal.mp4",
      imgUrl: "/creative.png",
      title: "Cooper commercial",
    },
    {
      videoUrl: "/videos/Nature_15sec.mp4",
      imgUrl: "/nature.png",
      title: "Eager travellers",
    },
  ];

  return (
    <main>
      {/* <HeroVideo category={`${currentPath}`} categoryVideo={true} /> */}
      <section className="2xl:container mx-auto my-16 md:my-24 lg:my-32">
        <TextComponent
          title={work.content.intro_header}
          textCol1={work.content.first_paragraph}
        />
      </section>
      {projects.map((project) => (
        <ProjectVideo
          key={project.title}
          videoUrl={project.videoUrl}
          imgUrl={project.imgUrl}
          title={project.title}
        />
      ))}
      {/* <SliderElement slides={sliderContent} /> */}
      <section className="2xl:container mx-auto my-16 lg:my-24">
        <TextComponent textCol1={work.content.second_paragraph} />
      </section>
    </main>
  );
}
