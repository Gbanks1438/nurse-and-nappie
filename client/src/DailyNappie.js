import { CartesianGrid, XAxis, YAxis, Legend, Tooltip, Area, AreaChart } from 'recharts';

function DailyNappie () {

  //Sample Data
  const dailyNappieData = [
    {
      time: '12am',
      Urine: 40,
      Feces: 0,
      Vomit: 0,
    },
    {
      time: '4am',
      Urine: 20,
      Feces: 40,
      Vomit: 0,
    },
    {
      time: '8am',
      Urine: 20,
      Feces: 80,
      Vomit: 0,
    },
    {
      time: '10am',
      Urine: 20,
      Feces: 0,
      Vomit: 0,
    },
    {
      time: 'Noon',
      Urine: 40,
      Feces: 0,
      Vomit: 20,
    },
    {
      time: '2pm',
      Urine: 20,
      Feces: 0,
      Vomit: 0,
    },
    {
      time: '4pm',
      Urine: 20,
      Feces: 0,
      Vomit: 0,
    },
    {
      time: '6pm',
      Urine: 20,
      Feces: 40,
      Vomit: 0,
    },
    {
      time: '8pm',
      Urine: 0,
      Feces: 0,
      Vomit: 10,
    },
    {
      time: '10pm',
      Urine: 40,
      Feces: 20,
      Vomit: 0,
    }
  ];

    return (
        <div>
         <AreaChart
        width={1400}
        height={600}
        data={dailyNappieData}
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
        <XAxis dataKey="time" stroke="#000" />
        <Legend />
        <YAxis stroke="#000" label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
      </AreaChart>
        </div>
    )
};

export default DailyNappie;