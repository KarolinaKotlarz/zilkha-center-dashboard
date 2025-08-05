"use client"
import { AreaChart } from '@/components/AreaChart';

const data = [
  {
    hour: '01:00',
    Today: 1000,
    Yesterday: 1200
  },
  {
    hour: '03:00',
    Today: 900,
    Yesterday: 800
  },
  {
    hour: '05:00',
    Today: 1000,
    Yesterday: 900
  },
  {
    hour: '07:00',
    Today: 900,
    Yesterday: 1000
  },
  {
    hour: '09:00',
    Today: 1300,
    Yesterday: 1200
  },
  {
    hour: '11:00',
    Today: 1000,
    Yesterday: 1200
  },
  {
    hour: '13:00',
    Today: 1500,
    Yesterday: 1400
  },
  {
    hour: '15:00',
    Today: 1000,
    Yesterday: 700
  },
  {
    hour: '17:00',
    Today: 900,
    Yesterday: 1000
  },
  {
    hour: '19:00',
    Today: null,
    Yesterday: 1200
  },
  {
    hour: '21:00',
    Today: null,
    Yesterday: 900
  },
  {
    hour: '23:00',
    Today: null,
    Yesterday: 700
  },

]

const valueFormatter = function (number: number | bigint) {
  return new Intl.NumberFormat('us').format(number).toString() + ' W';
};

export function DayChart() {
  return (
    <>
    <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Today's Energy Use</h3>
    <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold"></p>
    <AreaChart
        className="mt-4 h-72"
        data={data}
        index="hour"
        yAxisWidth={65}
        categories={['Today', 'Yesterday']}
        colors={['violet', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
      
    
  );
}