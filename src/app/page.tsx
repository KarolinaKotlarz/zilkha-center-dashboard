"use client"
import React, { Suspense, useState } from "react"
import { DayChart } from "@/components/custom/TotalEnergyChartPlaceholder";
import DeviceList from "@/components/custom/DeviceList";
import { ProgressBar } from "@/components/ProgressBar";
import { ExplanationCard } from "@/components/custom/ExplanationCard";
import { DeviceChart } from "@/components/custom/DevicesChartPlaceholder";
import { DayTotalsChart } from "@/components/custom/DayTotalsChart";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <aside className="lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col flex grow flex-col gap-y-4 overflow-y-auto whitespace-nowrap px-3 py-4">
          <span className="p-3 text-sx font-semibold text-gray-900">Sensors Available:</span>
        <div className="">
          <Suspense fallback={<div>Loading registers...</div>} >
              <DeviceList/>
            </Suspense>
      </div>
      </aside>
      <main className="lg:pl-64 lg:bg-blue-50 lg:py-3 lg:pr-3 lg:dark:bg-gray-950">
        <div className="bg-white p-4 sm:p-6 lg:rounded-lg lg:border lg:border-gray-200 dark:bg-gray-925 lg:dark:border-gray-900">   
          <section className="sticky font-bold top-16 z-50 -my-6 flex flex-col gap-6 bg-white py-6 md:flex-row md:flex-wrap md:items-center md:justify-between lg:top-0 dark:bg-gray-925 border-b border-gray-200 transition-all dark:border-gray-900">
            Energy Dashboard
          </section>
          <section className="my-8 grid grid-cols-3 gap-18">
            <div className="col-span-2">
              {/* <DayChart/> */}
              <DayTotalsChart/>
            </div>
            <div className="flex flex-col">
              <ProgressBar className="flex-1" value={63} label="63%"/>
              <ExplanationCard/>
            </div>
            <div className="col-span-3">
              <DeviceChart/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
