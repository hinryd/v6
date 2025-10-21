import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/api/wakatime")({
    server: {
        handlers: {
            GET: async () => {
                try {
                    const result = await fetch(
                        "https://wakatime.com/api/v1/users/hinryd/stats/last_7_days",
                    )
                    const json = await result.json()
                    const languages = json["data"]["languages"]
                    console.log(languages)
                    return new Response(JSON.stringify(languages), {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                } catch (error) {}
            },
        },
    },
})
