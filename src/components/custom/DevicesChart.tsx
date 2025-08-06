"use client"
import { AreaChart } from '@/components/AreaChart';
import { useEffect, useState } from 'react';

const data = [
  {
    hour: '01:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '03:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '05:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '07:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '09:00',
    Fridge: 80,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '11:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '13:00',
    Fridge: 120,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '15:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '17:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },
  {
    hour: '19:00',
    Fridge: 80,
    Oven: 300,
    Dishwasher: 0,
  },
  {
    hour: '21:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 200,
  },
  {
    hour: '23:00',
    Fridge: 40,
    Oven: 0,
    Dishwasher: 0,
  },

]

const valueFormatter = function (number: number | bigint) {
  return new Intl.NumberFormat('us').format(number).toString() + ' W';
};

export function DevicesChart() {
    const [d, setData] = useState({data: [{time: '1:00', device: 29 }], names: ['device']});
        const [sum, setSum] = useState(0);
    
        useEffect(() => {
            async function getData() {
                const id = '20976'
                const res = await fetch(`/api/sensor-today?id=${id}`).then((r) => r.json());
                console.log('done');
                console.log(res)
                // const data = await res.json();
                setData(res);
                // const cumulativeSum = data.map((val: {time: string, power: number}) => {return val.power}).reduce((partialSum: number, val: number) => partialSum + (val * 3600), 0)
                // setSum(cumulativeSum);
            }
            getData();
    
            
        }, []);
  return (
    <>
    <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Devices' Energy Use</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold"></p>
    <AreaChart
        className="mt-4 h-72"
        data={d.data}
        index="time"
        yAxisWidth={65}
        categories={d.names}
        colors={['emerald', 'amber', 'pink']}
        valueFormatter={valueFormatter}
      />
    </>
      
    
  );
}