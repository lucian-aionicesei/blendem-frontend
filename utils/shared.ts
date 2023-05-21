const StoryblokClient = require("storyblok-js-client");

export const Storyblok = new StoryblokClient({
	accessToken: process.env.NEXT_PUBLIC_OAUTHTOKEN,
});

export const config = {
	spaceId: 230484, // can be found in the space settings.
	documentCollectionSlug: "blendem",
	token: process.env.NEXT_PUBLIC_SPACE_TOKEN,
};
