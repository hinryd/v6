import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, LabelList, Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

export const description = "A donut chart with text";

type WakatimeLanguage = {
	name: string;
	total_seconds: number;
	percent: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
};

const chartColors = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)",
];

export default function DonutChart() {
	const [data, setData] = useState<WakatimeLanguage[]>([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const fetchWakatime = async () => {
			try {
				const result = await fetch("/api/wakatime");
				const languages = (await result.json()) as WakatimeLanguage[];
				setData(languages);
				setShow(true);
			} catch (error) {
				console.error("Failed to fetch Wakatime data:", error);
				setShow(false);
			}
		};
		fetchWakatime();
	}, []);

	// Transform Wakatime data to chart format
	const chartData = React.useMemo(() => {
		return data.map((lang, index) => ({
			language: lang.name,
			hours: lang.hours + lang.minutes / 60,
			fill: chartColors[index % chartColors.length],
		}));
	}, [data]);

	// Generate dynamic chart config
	const chartConfig = React.useMemo(() => {
		const config: ChartConfig = {
			hours: {
				label: "Hours",
			},
		};
		data.forEach((lang, index) => {
			config[lang.name] = {
				label: lang.name,
				color: chartColors[index % chartColors.length],
			};
		});
		return config;
	}, [data]);

	// Calculate total hours
	const totalHours = React.useMemo(() => {
		return data.reduce((acc, curr) => acc + curr.hours + curr.minutes / 60, 0);
	}, [data]);

	return show ? (
		<ChartContainer config={chartConfig} className="transform scale-75">
			<PieChart>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Pie
					data={chartData}
					dataKey="hours"
					nameKey="language"
					innerRadius={70}
					strokeWidth={1}
				>
					<LabelList
						dataKey="language"
						className="fill-background"
						stroke="none"
						fontSize={11}
						fontWeight={700}
						formatter={(value: keyof typeof chartConfig) =>
							chartConfig[value]?.label
						}
					/>
					<Label
						content={({ viewBox }) => {
							if (viewBox && "cx" in viewBox && "cy" in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) - 24}
											className="fill-muted-foreground"
										>
											This week
										</tspan>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className="fill-foreground text-3xl font-bold"
										>
											{totalHours.toFixed(1)}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="fill-muted-foreground"
										>
											Hours
										</tspan>
									</text>
								);
							}
						}}
					/>
				</Pie>
				{/* <ChartLegend
					// layout="vertical"
					// verticalAlign="top"
					// align="right"
					content={<ChartLegendContent nameKey="language" />}
					// className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
				/> */}
			</PieChart>
		</ChartContainer>
	) : (
		<></>
	);
}
