"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", minima: 222, maxima: 150 },
  { date: "2024-04-02", minima: 97, maxima: 180 },
  { date: "2024-04-03", minima: 167, maxima: 120 },
  { date: "2024-04-04", minima: 242, maxima: 260 },
  { date: "2024-04-05", minima: 373, maxima: 290 },
  { date: "2024-05-01", minima: 165, maxima: 220 },
  { date: "2024-05-02", minima: 293, maxima: 310 },
  { date: "2024-05-03", minima: 247, maxima: 190 },
  { date: "2024-05-04", minima: 385, maxima: 420 },
  { date: "2024-05-05", minima: 481, maxima: 390 },
  { date: "2024-05-06", minima: 498, maxima: 520 },
  { date: "2024-05-07", minima: 388, maxima: 300 },
  { date: "2024-05-08", minima: 149, maxima: 210 },
  { date: "2024-05-09", minima: 227, maxima: 180 },
  { date: "2024-05-10", minima: 293, maxima: 330 },
  { date: "2024-05-11", minima: 335, maxima: 270 },
  { date: "2024-05-12", minima: 197, maxima: 240 },
  { date: "2024-05-13", minima: 197, maxima: 160 },
  { date: "2024-05-19", minima: 235, maxima: 180 },
  { date: "2024-05-20", minima: 177, maxima: 230 },
  { date: "2024-05-21", minima: 82, maxima: 140 },
  { date: "2024-05-22", minima: 81, maxima: 120 },
  { date: "2024-05-23", minima: 252, maxima: 290 },
  { date: "2024-05-24", minima: 294, maxima: 220 },
  { date: "2024-05-25", minima: 201, maxima: 250 },
  { date: "2024-05-26", minima: 213, maxima: 170 },
  { date: "2024-05-27", minima: 420, maxima: 460 },
  { date: "2024-05-28", minima: 233, maxima: 190 },
  { date: "2024-05-29", minima: 78, maxima: 130 },
  { date: "2024-05-30", minima: 340, maxima: 280 },
  { date: "2024-05-31", minima: 178, maxima: 230 },
  { date: "2024-06-04", minima: 439, maxima: 380 },
  { date: "2024-06-05", minima: 88, maxima: 140 },
  { date: "2024-06-14", minima: 426, maxima: 380 },
  { date: "2024-06-15", minima: 307, maxima: 350 },
  { date: "2024-06-16", minima: 371, maxima: 310 },
  { date: "2024-06-17", minima: 475, maxima: 520 },
  { date: "2024-06-18", minima: 107, maxima: 170 },
  { date: "2024-06-19", minima: 341, maxima: 290 },
  { date: "2024-06-23", minima: 480, maxima: 530 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  minima: {
    label: "Temperatura Mínima",
    color: "hsl(var(--chart-1))",
  },
  maxima: {
    label: "Temperatura Máxima",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Temperatura</CardTitle>
          <CardDescription>Ao longo do ano</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillminima" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-minima)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-minima)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillmaxima" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-maxima)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-maxima)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="maxima"
              type="natural"
              fill="url(#fillmaxima)"
              stroke="var(--color-maxima)"
              stackId="a"
            />
            <Area
              dataKey="minima"
              type="natural"
              fill="url(#fillminima)"
              stroke="var(--color-minima)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
