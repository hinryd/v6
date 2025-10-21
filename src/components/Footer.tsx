import { Link } from "@tanstack/react-router";
import { CircleArrowUp } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t py-8 text-center text-sm text-muted-foreground">
			<div className="mx-auto max-w-xl px-4 mb-10">
				<p className="mb-2 text-lg">
					Made with{" "}
					<span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
						❤
					</span>
				</p>
				<p className="text-xs space-x-2 font-mono">
					<a
						className="hover:underline"
						href="https://tanstack.com/start"
						target="_blank"
						rel="noreferrer"
					>
						TanStack Start
					</a>
					<span>•</span>
					<a
						className="hover:underline"
						href="https://react.dev"
						target="_blank"
						rel="noreferrer"
					>
						React
					</a>
					<span>•</span>
					<a
						className="hover:underline"
						href="https://ui.shadcn.com"
						target="_blank"
						rel="noreferrer"
					>
						shadcn/ui
					</a>
					<span>•</span>
					<a
						className="hover:underline"
						href="https://tailwindcss.com"
						target="_blank"
						rel="noreferrer"
					>
						Tailwind CSS
					</a>
				</p>
			</div>
		</footer>
	);
}
