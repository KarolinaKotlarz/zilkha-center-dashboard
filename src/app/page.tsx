"use client"
import Image from "next/image";

import React, { useState } from "react"
import { Card } from '@/components/Card';
import { Checkbox } from "@/components/Checkbox"
import { Label } from '@/components/Label';

export const ExplanationCard = () => (
  <Card>
    <h3 className="font-semibold text-gray-900 dark:text-gray-50">
      Energy Consumption in the Zilkha Center
    </h3>
    <p className="mt-2 text-sm leading-6 text-gray-900 dark:text-gray-50">
      This dashboard lets you see the energy consumption 
      from the various devices in the Zilkha Center. You 
      can toggle the time range as well as set which devices 
      are visible on the graph. Use the checkboxes on the side 
      to set which items are visible. Click the arrows in the 
      top-right corner of the visualization to expand it to a full screen.
    </p>
  </Card> 
);

export const CheckboxWithLabel = ({label, onChecked} : {label: string, onChecked: any }) => (
  <div className="flex items-center justify-start gap-2">
    <Checkbox id="r1" onCheckedChange={onChecked} defaultChecked={true}/>
    <Label htmlFor="r1">{label}</Label>
  </div>
);

export default function Home() {
  const [showChart, setShowChart] = useState(true);
  const [showExplanation, setShowExplanation] = useState(true);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
      <aside className="flex grow flex-col gap-y-4 overflow-y-auto whitespace-nowrap px-3 py-4">
          <span className="p-5 text-sx font-semibold text-gray-900">Energy Dashboard</span>
        <div className="ms-8 flex flex-col gap-5">
          <CheckboxWithLabel label="Explanation" onChecked={() => setShowExplanation(!showExplanation)}/>
          <CheckboxWithLabel label="Graph" onChecked={setShowChart}/>
      </div>
      </aside>
      </div>
      <main className="lg:pl-64 lg:bg-blue-50 lg:py-3 lg:pr-3 lg:dark:bg-gray-950">
        <div className="bg-white p-4 sm:p-6 lg:rounded-lg lg:border lg:border-gray-200 dark:bg-gray-925 lg:dark:border-gray-900">   
          <section className="sticky top-16 z-50 -my-6 flex flex-col gap-6 bg-white py-6 md:flex-row md:flex-wrap md:items-center md:justify-between lg:top-0 dark:bg-gray-925 border-b border-gray-200 transition-all dark:border-gray-900">
            Filters
          </section>
          <section className="my-8">
            {showExplanation && <ExplanationCard/>}
            {/* {showExplanation && <ExplanationCard/>}
            {showChart && <Suspense fallback={<AreaChartFallback/>}>
            <ServerAreaChart/>
            </Suspense>}
            <Card className="min-h-64">
              Visualization
            </Card> */}
            Section
          </section>
        </div>
      </main>
    </div>
  );
}
