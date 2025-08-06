"use client"
import { useEffect, useState } from "react";
import { AreaChart } from "../AreaChart";

const valueFormatter = function (number: number | bigint) {
  return new Intl.NumberFormat('us').format(number).toString() + ' W';
};

export function DayTotalsChart() {
    const [data, setData] = useState([{hour: '1:00', Yesterday: 0}]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        async function getData() {
            const res = await fetch('/api/hourly-totals', new Request(''));
            const data = await res.json();
            setData(data);
            const cumulativeSum = data.map((val: {time: string, power: number}) => {return val.power}).reduce((partialSum: number, val: number) => partialSum + (val * 3600), 0)
            setSum(cumulativeSum);
        }
        getData();

        
    }, []);
  return (
    <>
    <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Energy Use</h3>
    <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold"></p>
    <AreaChart
        className="mt-4 h-72"
        data={data}
        index="time"
        yAxisWidth={65}
        categories={['Today', 'Yesterday']}
        colors={['violet', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
      
    
  );
}