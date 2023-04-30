import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<main>
			<h1 className="text text-2xl dark:text-red-600 text-blue-600">
				Hello world
			</h1>

			<button
				onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
				className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 rounded-lg">
				Toggle Mode
			</button>
		</main>
	);
}
