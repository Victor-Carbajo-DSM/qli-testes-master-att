import React from "react";
import { Component } from "@/components/dashboard/home/chart";
import { LineWindChart } from "@/components/dashboard/home/bar-chart";
import { WeatherCard } from "@/components/dashboard/home/WeatherCard";
import { WindCompass } from "@/components/dashboard/home/alert";
import { Thermometer } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";

export default function Teste() {
  return (
    <div className="grid grid-cols-4 auto-rows-auto gap-2">
      <div className="col-start-1">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-2">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-3">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-start-4">
        <WeatherCard
          title="Temperature"
          value={25}
          unit="°C"
          icon={Thermometer}
          color="#FF7D50"
        />
      </div>
      <div className="col-span-3 col-start-1 row-start-2">
        <Component />
      </div>
      <div className="col-span-4 col-start-1 row-start-3">
        <LineWindChart />
      </div>
      <div className="row-span-1 col-start-4 row-start-2">
        <WeatherCard title="Wind Status" color="#4FC3F7">
          <WindCompass
            currentDirection={135}
            currentIntensity={110}
            averageDirection={130}
          />
        </WeatherCard>
      </div>
      <div className="col-span-4 col-start-1 row-start-4">
        <WeatherCard title="Data Table" color="#6B7280">
          <DataTable data={[]} stationName={""} />
        </WeatherCard>
      </div>
    </div>
  );
}