import { TanstackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { ModeToggle } from "../components/ModeToggle";
import { ThemeProvider } from "../components/ThemeProvider";

import Stacks from "@/components/Stacks";
import { Button } from "@/components/ui/button";
import { CircleArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Henry Li • Personal Links",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const topSentinelRef = useRef<HTMLDivElement>(null);
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const sentinel = topSentinelRef.current;
		if (!sentinel) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// When sentinel is visible (at top), hide button
				// When sentinel is not visible (scrolled down), show button
				setShowBackToTop(!entry.isIntersecting);
			},
			{
				threshold: 0,
			},
		);

		observer.observe(sentinel);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider defaultTheme="system" storageKey="henry-li-theme">
					{/* Invisible sentinel element at the top */}
					<div
						id="top"
						ref={topSentinelRef}
						className="absolute top-0 h-px w-full"
					/>

					<Header />
					{children}
					<Footer />

					{/* Back to top button - hidden when at top */}
					{showBackToTop && (
						<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
							<Button className="mt-3" asChild variant="outline" size="sm">
								<a
									className="hover:underline flex justify-center items-center gap-2"
									href="#top"
								>
									Back to top <CircleArrowUp className="size-4" />
								</a>
							</Button>
						</div>
					)}

					{/* Sticky Theme Toggle */}
					<div className="fixed bottom-4 right-4 z-50">
						<ModeToggle />
					</div>

					<TanstackDevtools
						config={{
							position: "bottom-left",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
