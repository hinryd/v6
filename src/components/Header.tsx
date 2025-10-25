import { ChevronDown, LogIn, Server, ServerCog } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const services = [
    {
        title: "n8n",
        href: "https://n8n.hinry.xyz",
    },
    {
        title: "ez",
        href: "https://ez.hinry.xyz",
    },
]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex w-full justify-center">
            <div className="mx-auto flex h-14 max-w-xl w-full items-center justify-between px-4 border-b border-x rounded-b-xl bg-background/70 backdrop-blur-[2px] shadow-lg supports-[backdrop-filter]:bg-background/50">
                <a
                    href="https://www.youtube.com/watch?v=GI7Bd2TWwsA"
                    className="select-none text-2xl font-wdxl font-bold leading-none tracking-tight text-transparent drop-shadow-sm bg-gradient-to-r from-sky-500 via-pink-500 to-emerald-500 bg-clip-text"
                >
                    本気でやれ もっと欲張れ
                </a>

                <div className="flex items-center gap-2">
                    {/* Mobile: Dropdown Navigation */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-1"
                                >
                                    <Server className="size-4" />
                                    <span className="hidden md:block ml-1">
                                        Services
                                    </span>
                                    <ChevronDown className="size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="md:hidden"
                                align="end"
                            >
                                <DropdownMenuLabel className="font-bold">
                                    Jump to 👇
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {services.map((service) => (
                                    <DropdownMenuItem
                                        key={service.href}
                                        asChild
                                    >
                                        <a href={service.href}>
                                            {service.title}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuItem asChild key="login">
                                    <a
                                        href="https://dok.hinry.xyz"
                                        className="flex items-center justify-between"
                                    >
                                        <span className="mr-1">Sign In</span>
                                        <LogIn className="size-4" />
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Tablet/Desktop: Individual Links */}
                    <div className="hidden md:flex items-center gap-1.5">
                        {services.map((service) => (
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                key={service.href}
                            >
                                <a href={service.href}>{service.title}</a>
                            </Button>
                        ))}
                    </div>

                    <Button size="sm" className="shadow-lg hidden md:block">
                        <a
                            href="https://dok.hinry.xyz"
                            className="flex items-center"
                        >
                            <LogIn className="size-4" />
                            <span className="hidden md:block ml-1">Login</span>
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    )
}
