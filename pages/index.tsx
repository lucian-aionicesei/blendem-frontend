import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { HomeContent, Response } from "../utils/interfaces";
import { Storyblok, config } from "../utils/shared";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [homeContent, setHomeContent] = useState<HomeContent | null>(null);

	useEffect(() => {
		Storyblok.get(`cdn/stories`, {
			token: config.token,
		}).then(async ({ data: { stories } }: Response) => {
			console.log(stories);
		});
	}, []);

	return <main></main>;
}
