import { Link } from "@tanstack/react-router";
import { ChevronDown, LogIn, Server, ServerCog } from "lucide-react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const services = [
	{
		title: "n8n",
		href: "https://n8n.hinry.xyz",
	},
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 flex w-full justify-center">
			<div className="mx-auto flex h-14 max-w-xl w-full items-center justify-between px-4 border-b border-x rounded-b-xl bg-background/70 backdrop-blur-[2px] shadow-lg supports-[backdrop-filter]:bg-background/50">
				<Link
					to="/"
					className="select-none text-2xl font-mono font-extrabold leading-none tracking-tight text-transparent drop-shadow-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text"
				>
					HINRYXYZ
				</Link>

				<div className="flex items-center gap-2">
					{/* Mobile: Dropdown Navigation */}
					<div className="md:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" size="sm" className="gap-1">
									<Server className="size-4" />
									<span className="hidden md:block ml-1">Services</span>
									<ChevronDown className="size-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="md:hidden" align="end">
								<DropdownMenuLabel className="font-bold">
									Jump to 👇
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{services.map((service) => (
									<DropdownMenuItem key={service.href} asChild>
										<a href={service.href}>{service.title}</a>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Tablet/Desktop: Individual Links */}
					<div className="hidden md:flex items-center gap-1.5">
						{services.map((service) => (
							<Button asChild variant="ghost" size="sm" key={service.href}>
								<a href={service.href}>{service.title}</a>
							</Button>
						))}
					</div>

					<Button size="sm" className="shadow-lg">
						<a href="https://dok.hinry.xyz" className="flex items-center">
							<LogIn className="size-4" />
							<span className="hidden md:block ml-1">Login</span>
						</a>
					</Button>
				</div>
			</div>
		</header>
	);
}
