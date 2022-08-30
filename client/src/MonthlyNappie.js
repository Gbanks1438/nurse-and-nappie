import { CartesianGrid, XAxis, YAxis, Legend, Tooltip, Area, AreaChart } from 'recharts';

function MonthlyNappie () {

   //Sample Data 
   const monthlyNappieData = [
    {
      date: "2022-03-01",
      Urine: 9,
      Feces: 3,
      Vomit: 2
    },
    {
      date: "2022-03-02",
      Urine: 7,
      Feces: 2,
      Vomit: 2
    },
    {
      date: "2022-03-03",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-04",
      Urine: 6,
      Feces: 1,
      Vomit: 1
    },
    {
      date: "2022-03-05",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-06",
      Urine: 5,
      Feces: 1,
      Vomit: 2
    },
    {
      date: "2022-03-07",
      Urine: 9,
      Feces: 3,
      Vomit: 1
    },
    {
      date: "2022-03-08",
      Urine: 10,
      Feces: 1,
      Vomit: 3
    },
    {
      date: "2022-03-09",
      Urine: 8,
      Feces: 3,
      Vomit: 2
    },
    {
      date: "2022-03-10",
      Urine: 8,
      Feces: 1,
      Vomit: 2
    },
    {
      date: "2022-03-11",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-12",
      Urine: 5,
      Feces: 3,
      Vomit: 1
    }, 
    {
      date: "2022-03-13",
      Urine: 9,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-14",
      Urine: 8,
      Feces: 4,
      Vomit: 1
    },
    {
      date: "2022-03-15",
      Urine: 9,
      Feces: 2,
      Vomit: 2
    },
    {
      date: "2022-03-16",
      Urine: 8,
      Feces: 1,
      Vomit: 2
    },
    {
      date: "2022-03-17",
      Urine: 9,
      Feces: 4,
      Vomit: 4
    },
    {
      date: "2022-03-18",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-19",
      Urine: 10,
      Feces: 1,
      Vomit: 2
    },
    {
      date: "2022-03-20",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-21",
      Urine: 6,
      Feces: 3,
      Vomit: 1
    },
    {
      date: "2022-03-22",
      Urine: 6,
      Feces: 2,
      Vomit: 1
    },
    {
      date: "2022-03-23",
      Urine: 9,
      Feces: 4,
      Vomit: 2
    },
    {
      date: "2022-03-24",
      Urine: 10,
      Feces: 2,
      Vomit: 2
    },
    {
      date: "2022-03-25",
      Urine: 8,
      Feces: 4,
      Vomit: 4
    },
    {
      date: "2022-03-26",
      Urine: 6,
      Feces: 1,
      Vomit: 1
    },
    {
      date: "2022-03-27",
      Urine: 6,
      Feces: 3,
      Vomit: 2
    },
    {
      date: "2022-03-28",
      Urine: 8,
      Feces: 5,
      Vomit: 3
    },
    {
      date: "2022-03-29",
      Urine: 9,
      Feces: 1,
      Vomit: 2
    }, 
    {
      date: "2022-03-30",
      Urine: 7,
      Feces: 1,
      Vomit: 1
    },
    {
      date: "2022-03-31",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    }
  ];

    return (
        <div>
        <AreaChart
        width={1400}
        height={600}
        data={monthlyNappieData}
        >
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Urine"
          stroke="#DAA520"
          fill="yellow"
        />
        <Area
          type="monotone"
          dataKey="Feces"
          stroke="#654321"
          fill="brown"
        />
          <Area
          type="monotone"
          dataKey="Vomit"
          stroke="#8D918D"
          fill="#FFFDD0"
        />
        <CartesianGrid stroke="#666" strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="#000" />
        <Legend />
        <YAxis stroke="#000" label={{ value: 'Incidents', angle: -90, position: 'insideLeft' }} />
      </AreaChart>
        </div>
    )
};

export default MonthlyNappie;