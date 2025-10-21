import DonutChart from "@/components/DonutChart";
import Stacks from "@/components/Stacks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { createFileRoute } from "@tanstack/react-router";
import {
	BadgeCheck,
	ExternalLink,
	Github,
	Globe,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import BrawlKingImage from "../assets/brawlking.png";
import GolImage from "../assets/gol.png";
import HnImage from "../assets/hn.png";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const [tab, setTab] = useState<"projects" | "experience" | "blog">(
		"projects",
	);

	useEffect(() => {
		const valid = new Set(["projects", "experience", "blog"]);
		const applyHash = () => {
			const h =
				typeof window !== "undefined" ? window.location.hash.slice(1) : "";
			if (h && valid.has(h)) setTab(h as typeof tab);
		};
		applyHash();
		window.addEventListener("hashchange", applyHash);
		return () => window.removeEventListener("hashchange", applyHash);
	}, []);

	const handleTabChange = (value: string) => {
		setTab(value as typeof tab);
		if (typeof window !== "undefined") {
			history.replaceState(null, "", `#${value}`);
		}
	};

	const socials = [
		{ name: "GitHub", href: "https://github.com/hinryd", icon: Github },
		{
			name: "Instagram",
			href: "https://instagram.com/henry.lkh",
			icon: Instagram,
		},
		// { name: "Twitter", href: "https://x.com/rehnyx", icon: Twitter },
		{ name: "Website", href: "https://hinry.xyz", icon: Globe },
		{ name: "Email", href: "lkhh@protonmail.com", icon: Mail },
	] as const;

	const projects = [
		{
			title: "hackernews",
			description: "A sleek hacker news client with split view and dark mode",
			href: "https://hn-svelte-omega.vercel.app/",
			tags: [
				{
					src: "https://cdn.svglogos.dev/logos/svelte-icon.svg",
					alt: "Svelte",
				},
				{
					src: "https://cdn.svglogos.dev/logos/tailwindcss-icon.svg",
					alt: "Tailwindcss",
				},
			],
			screenshot: HnImage,
			isActive: true,
		},
		{
			title: "Brawl King",
			description: "A quick peek to the stats for each map in Brawl Stars",
			href: "https://brawlking.vercel.app/",
			tags: [
				{
					src: "https://cdn.svglogos.dev/logos/svelte-icon.svg",
					alt: "Svelte",
				},
				{
					src: "https://cdn.svglogos.dev/logos/tailwindcss-icon.svg",
					alt: "Tailwindcss",
				},
				{
					src: "https://cdn.svglogos.dev/logos/typescript-icon.svg",
					alt: "Typescript",
				},
			],
			screenshot: BrawlKingImage,
			isActive: true,
		},
		{
			title: "Conway's Game of Life",
			description: "A slow, not optimized implementation of GoL!",
			href: "https://svelte-gol-omega.vercel.app",
			tags: [
				{
					src: "https://cdn.svglogos.dev/logos/svelte-icon.svg",
					alt: "Svelte",
				},
			],
			screenshot: GolImage,
			isActive: true,
		},
	];

	const experience = [
		{
			role: "Application Engineer",
			company: "Arrow Electronics",
			period: "2024 — 2025",
			desc: "Building world-class agentic developer tools and delightful UX.",
		},
		{
			role: "Software Engineer",
			company: "Amtran International",
			period: "2022 — 2024",
			desc: "Led the frontend platform, performance and design systems.",
		},
		// {
		// 	role: "Intern",
		// 	company: "Tech Corp",
		// 	period: "2019",
		// 	desc: "Full-stack intern shipping features across the stack.",
		// },
	];

	const posts = [
		{
			title: "Designing a Minimal Personal Site",
			summary: "Thoughts on content-first design and performance on mobile.",
			href: "#",
			date: "2025-08-21",
			emoji: "🎨",
		},
		{
			title: "Agentic UX Patterns",
			summary: "What makes AI tooling feel magical and trustworthy? My notes.",
			href: "#",
			date: "2025-05-03",
			emoji: "🤖",
		},
		{
			title: "Shipping Faster with TanStack Start",
			summary: "SSR, islands, and strong routing ergonomics in practice.",
			href: "#",
			date: "2024-11-10",
			emoji: "🚀",
		},
	];

	return (
		<main className="mx-auto max-w-xl px-4 pb-16 pt-8">
			{/* Hero */}
			<section className="flex flex-col items-center text-center">
				<Avatar className="size-24 border shadow-sm">
					<AvatarImage
						src="https://api.dicebear.com/7.x/initials/svg?seed=Henry%20Li"
						alt="Henry Li"
					/>
					<AvatarFallback>HL</AvatarFallback>
				</Avatar>
				<h1 className="mt-3 text-2xl font-extrabold tracking-tight flex items-center gap-2">
					<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
						Henry Li
					</span>
					{/* <BadgeCheck className="size-6 text-blue-500 fill-blue-500/20" /> */}
				</h1>
				<p className="text-sm text-muted-foreground">
					Engineer • Builder • Writer
				</p>
				{/* <p className="mt-1 text-xs text-muted-foreground flex items-center">
					<MapPin className="size-3 mr-1" />
					Hong Kong
				</p> */}

				<div className="relative mt-1 flex flex-wrap justify-center gap-3">
					<Stacks />
					<div className="absolute top-6 flex gap-4">
						{socials.map((s) => (
							<Button
								key={s.name}
								asChild
								variant="outline"
								size="lg"
								className="size-14 rounded-full p-0 "
								title={s.name}
							>
								<a href={s.href} target="_blank" rel="noreferrer">
									<s.icon className="size-5" />
								</a>
							</Button>
						))}
					</div>
				</div>
			</section>

			{/* Anchor targets for hash navigation */}
			<div className="relative">
				<div id="projects" className="absolute -top-20 h-0 w-0" aria-hidden />
				<div id="experience" className="absolute -top-20 h-0 w-0" aria-hidden />
				<div id="blog" className="absolute -top-20 h-0 w-0" aria-hidden />
			</div>

			{/* Tabs */}
			<Tabs className="mt-4" value={tab} onValueChange={handleTabChange}>
				<TabsList className="mx-auto bg-slate-100 dark:bg-transparent w-80">
					<TabsTrigger value="projects">Projects</TabsTrigger>
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="blog">Blog</TabsTrigger>
				</TabsList>

				<TabsContent value="projects" className="mt-4 space-y-3">
					{projects.map((p) => (
						<Card
							key={p.title}
							className="text-left overflow-hidden flex-row p-0 gap-0 h-32"
						>
							<div className="relative w-2/5 h-32 flex-shrink-0 overflow-hidden">
								{p.isActive ? (
									<div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-semibold shadow-lg">
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
											<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
										</span>
										LIVE
									</div>
								) : (
									<div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-red-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-semibold shadow-lg">
										<span className="relative flex h-2 w-2">
											<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
										</span>
										DOWN
									</div>
								)}
								<img
									src={p.screenshot}
									alt={p.title}
									className="h-full w-full object-cover transition-transform hover:scale-105"
								/>
							</div>
							<div className="flex flex-1 flex-col justify-between py-3">
								<CardHeader className="pb-1 px-4 gap-0.5">
									<CardTitle className="text-md leading-tight">
										{p.title}
									</CardTitle>
									<CardDescription className="text-[11px] leading-snug line-clamp-2">
										{p.description}
									</CardDescription>
									<CardAction>
										<Button
											asChild
											size="sm"
											variant="outline"
											className="h-7 text-xs"
										>
											<a href={p.href} target="_blank" rel="noreferrer">
												<ExternalLink className="size-3" />
											</a>
										</Button>
									</CardAction>
								</CardHeader>
								<CardContent className="px-4 pb-0">
									<div className="flex flex-wrap gap-1">
										{p.tags.map((t) => (
											<Tooltip key={t.alt}>
												<TooltipTrigger>
													<img
														key={t.alt}
														className="size-5"
														src={t.src}
														alt={t.alt}
													/>
												</TooltipTrigger>
												<TooltipContent>
													<p>{t.alt}</p>
												</TooltipContent>
											</Tooltip>

											// <span
											// 	key={t}
											// 	className="rounded border px-1.5 py-0.5 text-[10px] leading-none text-muted-foreground"
											// >
											// 	{t}
											// </span>
										))}
									</div>
								</CardContent>
							</div>
						</Card>
					))}
				</TabsContent>

				<TabsContent value="experience" className="mt-4">
					<ol className="relative ml-3 border-l pl-6">
						{experience.map((e) => (
							<li key={e.role + e.company} className="mb-8 text-left">
								<span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border bg-background ring-2 ring-primary" />
								<h3 className="font-semibold">
									{e.role} · {e.company}
								</h3>
								<div className="text-xs text-muted-foreground">{e.period}</div>
								<p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
							</li>
						))}
					</ol>
				</TabsContent>

				<TabsContent value="blog" className="mt-4 space-y-3">
					{posts.map((b) => (
						<Card key={b.title} className="text-left">
							<CardHeader className="pb-3">
								<CardTitle className="text-base">
									<a
										href={b.href}
										target="_blank"
										rel="noreferrer"
										className="hover:underline"
									>
										{b.title}
									</a>
								</CardTitle>
								<CardDescription>{b.summary}</CardDescription>
								<CardAction>
									<span className="text-2xl" role="img" aria-label="emoji">
										{b.emoji}
									</span>
								</CardAction>
							</CardHeader>
							<CardFooter className="justify-between">
								<span className="text-xs text-muted-foreground">
									{new Date(b.date).toLocaleDateString()}
								</span>
								<Button asChild size="sm" variant="ghost">
									<a href={b.href} target="_blank" rel="noreferrer">
										Read <ExternalLink className="ml-1 size-4" />
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</TabsContent>
			</Tabs>
		</main>
	);
}
