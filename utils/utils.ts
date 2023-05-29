import { Storyblok, config } from "./shared";

// we'll need this later
function getAllStories() {
  let per_page = 100;
  let requests: any = [];

  Storyblok.get(`cdn/stories`, {
    page: 1,
    per_page: 1,
    token: config.token,
  }).then(async (response: any) => {
    // access total header -> Total amount of Stories
    // and calculate Total amount of pages
    let totalPages = Math.ceil(response.total / 100);

    for (let i = 1; i <= totalPages; i++) {
      let documents = await Storyblok.get("cdn/stories/", {
        per_page: per_page,
        page: i,
        token: config.token,
      });

      requests.push(...documents.data.stories);
    }

    requests.map((story: any) => {
      console.log(story);
    });
  });
}
