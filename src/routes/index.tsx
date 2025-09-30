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
import { createFileRoute } from "@tanstack/react-router";
import {
	ExternalLink,
	Github,
	Globe,
	Linkedin,
	Mail,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

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
		{ name: "GitHub", href: "https://github.com/henry", icon: Github },
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/henry",
			icon: Linkedin,
		},
		{ name: "Twitter", href: "https://x.com/henry", icon: Twitter },
		{ name: "Website", href: "https://henry.example.com", icon: Globe },
		{ name: "Email", href: "mailto:henry@example.com", icon: Mail },
	] as const;

	const projects = [
		{
			title: "Linktree Clone",
			description:
				"A sleek personal link hub built with TanStack Start + shadcn/ui.",
			href: "#",
			tags: ["TanStack", "Shadcn", "Tailwind"],
			screenshot:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
		},
		{
			title: "AI Coding Assistant",
			description: "Agentic AI pair programmer with MCP integrations.",
			href: "#",
			tags: ["AI", "MCP", "TypeScript"],
			screenshot:
				"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
		},
		{
			title: "Open Source Charts",
			description: "Beautiful chart components powered by Recharts.",
			href: "#",
			tags: ["Recharts", "UI"],
			screenshot:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
		},
	];

	const experience = [
		{
			role: "Senior Software Engineer",
			company: "Windsurf AI",
			period: "2023 — Present",
			desc: "Building world-class agentic developer tools and delightful UX.",
		},
		{
			role: "Software Engineer",
			company: "Startup Co.",
			period: "2020 — 2023",
			desc: "Led the frontend platform, performance and design systems.",
		},
		{
			role: "Intern",
			company: "Tech Corp",
			period: "2019",
			desc: "Full-stack intern shipping features across the stack.",
		},
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
				<h1 className="mt-4 text-2xl font-extrabold tracking-tight">
					<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-white">
						Henry Li
					</span>
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Engineer • Builder • Writer
				</p>

				<div className="mt-4 flex flex-wrap justify-center gap-3">
					{socials.map((s) => (
						<Button
							key={s.name}
							asChild
							variant="outline"
							size="lg"
							className="size-14 rounded-full p-0"
							title={s.name}
						>
							<a href={s.href} target="_blank" rel="noreferrer">
								<s.icon className="size-5" />
							</a>
						</Button>
					))}
				</div>
			</section>

			{/* Anchor targets for hash navigation */}
			<div className="relative">
				<div id="projects" className="absolute -top-20 h-0 w-0" aria-hidden />
				<div id="experience" className="absolute -top-20 h-0 w-0" aria-hidden />
				<div id="blog" className="absolute -top-20 h-0 w-0" aria-hidden />
			</div>

			<Stacks />

			{/* Tabs */}
			<Tabs className="mt-4" value={tab} onValueChange={handleTabChange}>
				<TabsList className="mx-auto">
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
							<div className="relative w-2/5 h-32 flex-shrink-0 overflow-hidden bg-muted">
								<img
									src={p.screenshot}
									alt={p.title}
									className="h-full w-full object-cover transition-transform hover:scale-105"
								/>
							</div>
							<div className="flex flex-1 flex-col justify-between py-3">
								<CardHeader className="pb-1 px-4 gap-0.5">
									<CardTitle className="text-sm leading-tight">
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
											<span
												key={t}
												className="rounded border px-1.5 py-0.5 text-[10px] leading-none text-muted-foreground"
											>
												{t}
											</span>
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
