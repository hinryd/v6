import WindsurfLogo from "../assets/windsurf-black-symbol.svg";
import Marquee from "./Marquee";

const techStack1 = [
	{
		name: "Next.js",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png",
	},
	{
		name: "Flutter",
		iconUrl: "https://cdn.svglogos.dev/logos/flutter.svg",
	},
	{
		name: "Windsurf",
		iconUrl: WindsurfLogo,
	},
	{
		name: "PostgreSQL",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/psotgresql_ggzxtu.png",
	},
	{
		name: "Supabase",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/supabase_eban6b.png",
	},
	{
		name: "shadcn/ui",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png",
	},
];
const techStack2 = [
	{
		name: "React Native",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png",
	},
	{
		name: "Python",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp",
	},
	{
		name: "MongoDB",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg",
	},
	{
		name: "FastAPI",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/FastAPI_prcozs.png",
	},
	{
		name: "Git",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764943/gitlogo_ozinof.png",
	},
	{
		name: "Radix UI",
		iconUrl:
			"https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765176/radixui_nmbq9s.png",
	},
];

export default function Stacks() {
	return (
		<div className="mt-3 mx-auto flex flex-col gap-2.5 max-w-xl">
			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
				<Marquee pauseOnHover className="[--duration:90s]">
					{techStack1.map((tech) => (
						<div
							key={tech.name}
							className="flex items-center gap-[7px] text-xs"
						>
							<img
								alt=""
								src={tech.iconUrl || "/placeholder.svg"}
								height={20}
								width={20}
								className="rounded object-contain"
							/>
							<p>{tech.name}</p>
						</div>
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:90s]">
					{techStack2.map((tech) => (
						<div
							key={tech.name}
							className="flex items-center gap-[7px] text-xs"
						>
							<img
								alt=""
								src={tech.iconUrl || "/placeholder.svg"}
								height={20}
								width={20}
								className="rounded object-contain"
							/>
							<p>{tech.name}</p>
						</div>
					))}
				</Marquee>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</div>
	);
}
