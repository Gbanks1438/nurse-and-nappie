import { BarChart, Bar, CartesianGrid, XAxis, YAxis, AreaChart, Legend, Area, Tooltip, ComposedChart, Scatter } from 'recharts';

function Chart() {
  
  //Sample Data
  const dailyNursingData = [
    { time: '12am', Left_Breast: 17, Right_Breast: 13 },
    { time: '3am', Left_Breast: 15, Right_Breast: 15},
    { time: '6am', Left_Breast: 16, Right_Breast: 16},
    { time: '9am', Left_Breast: 15, Right_Breast: 13},
    { time: '11am', Left_Breast: 15, Right_Breast: 15, vit_d:10 },
    { time: '1pm', Left_Breast: 14, Right_Breast: 15},
    { time: '3pm', Left_Breast: 16, Right_Breast: 13},
    { time: '5pm', Left_Breast: 13, Right_Breast: 13},
    { time: '7pm', Left_Breast: 15, Right_Breast: 15},
    { time: '9pm', Left_Breast: 15, Right_Breast: 15}
  ];
  
  //Sample Data
  const dailyNappieData = [
    {Volume:'Small',
    Time: '12am',
    Urine: 'Medium'
    },
    {Volume:'Med'},
    {Volume:'XL'},
    {Volume:'LG'},
    {
      Time: '12am',
      Urine: 4000,
      Feces: 2400,
      Vomit: 2400,
    },
    {
      Time: '1am',
      Urine: 3000,
      Feces: 1398,
      Vomit: 2210,
    },
    {
      Time: '2am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '3am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '4am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '5am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '6am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '7am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '8am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '9am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '10am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '11am',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: 'Noon',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '1pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '2pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '3pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '4pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '5pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '6pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '7pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '8pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '9pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '10pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '11pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    },
    {
      Time: '11:59pm',
      Urine: 2000,
      Feces: 9800,
      Vomit: 2290,
    }
  ];

  //Sample Data 
  const monthlyNappieData = [
    {
      Date: "2022-03-01",
      Urine: 9,
      Feces: 3,
      Vomit: 2
    },
    {
      Date: "2022-03-02",
      Urine: 7,
      Feces: 2,
      Vomit: 2
    },
    {
      Date: "2022-03-03",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-04",
      Urine: 6,
      Feces: 1,
      Vomit: 1
    },
    {
      Date: "2022-03-05",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-06",
      Urine: 5,
      Feces: 1,
      Vomit: 2
    },
    {
      Date: "2022-03-07",
      Urine: 9,
      Feces: 3,
      Vomit: 1
    },
    {
      Date: "2022-03-08",
      Urine: 10,
      Feces: 1,
      Vomit: 3
    },
    {
      Date: "2022-03-09",
      Urine: 8,
      Feces: 3,
      Vomit: 2
    },
    {
      Date: "2022-03-10",
      Urine: 8,
      Feces: 1,
      Vomit: 2
    },
    {
      Date: "2022-03-11",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-12",
      Urine: 5,
      Feces: 3,
      Vomit: 1
    }, 
    {
      Date: "2022-03-13",
      Urine: 9,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-14",
      Urine: 8,
      Feces: 4,
      Vomit: 1
    },
    {
      Date: "2022-03-15",
      Urine: 9,
      Feces: 2,
      Vomit: 2
    },
    {
      Date: "2022-03-16",
      Urine: 8,
      Feces: 1,
      Vomit: 2
    },
    {
      Date: "2022-03-17",
      Urine: 9,
      Feces: 4,
      Vomit: 4
    },
    {
      Date: "2022-03-18",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-19",
      Urine: 10,
      Feces: 1,
      Vomit: 2
    },
    {
      Date: "2022-03-20",
      Urine: 8,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-21",
      Urine: 6,
      Feces: 3,
      Vomit: 1
    },
    {
      Date: "2022-03-22",
      Urine: 6,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-03-23",
      Urine: 9,
      Feces: 4,
      Vomit: 2
    },
    {
      Date: "2022-03-24",
      Urine: 10,
      Feces: 2,
      Vomit: 2
    },
    {
      Date: "2022-03-25",
      Urine: 8,
      Feces: 4,
      Vomit: 4
    },
    {
      Date: "2022-03-26",
      Urine: 6,
      Feces: 1,
      Vomit: 1
    },
    {
      Date: "2022-03-27",
      Urine: 6,
      Feces: 3,
      Vomit: 2
    },
    {
      Date: "2022-03-28",
      Urine: 8,
      Feces: 5,
      Vomit: 3
    },
    {
      Date: "2022-03-29",
      Urine: 9,
      Feces: 1,
      Vomit: 2
    }, 
    {
      Date: "2022-03-30",
      Urine: 7,
      Feces: 1,
      Vomit: 1
    },
    {
      Date: "2022-03-31",
      Urine: 7,
      Feces: 2,
      Vomit: 1
    }
  ];

  return (
    <div>
      <h1><i class="fa-solid fa-person-breastfeeding"></i>Daily Nursing Chart:</h1>
      <div className="graph-chart">
        <ComposedChart width={1400} height={500} data={dailyNursingData} barGap={30} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis label={{ value: 'Duration', angle: -90, position: 'insideLeft' }} />
          <Scatter name="Vitamin D" dataKey="vit_d" fill="gold" shape="star" />
          <Tooltip />
          <Legend />
          <Bar name="Left Breast" dataKey="Left_Breast" fill="#e0218a" /> 
          <Bar name="Right Breast" dataKey="Right_Breast" fill="#FA8072" />
        </ComposedChart>
      </div>
      <br />
      <br />
      <br />
      <h1><i class="fa-solid fa-baby"></i>Daily Nappie Chart:</h1>
      <div className="graph-chart">
        <BarChart
          width={1400}
          height={600}
          data={dailyNappieData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time"/>
          <YAxis type="category" dataKey="Volume" label={{ value: 'Volume', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Feces" fill="#8884d8" />
          <Bar dataKey="Vomit" fill="#82ca9d" />
          <Bar dataKey="Urine" fill="#ffc658" />
        </BarChart>
      </div>
      <br />
      <br />
      <br />
      <h1><i class="fa-solid fa-baby"></i>Monthly Nappie Chart:</h1>
      <div className="graph-chart">
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
        <XAxis dataKey="Date" stroke="#000" />
        <Legend />
        <YAxis stroke="#000" label={{ value: 'Incidents', angle: -90, position: 'insideLeft' }} />
      </AreaChart>
    </div>
    <div>
    <br />
      <br />
      <h4>Diaper Tally:</h4>
      <table>
        <thead>
          <tr>
              <th>
                Wipes
              </th>
              <th>
                Size NB
              </th>
              <th>
                Size 1
              </th>
              <th>
                Size 2
              </th>
              <th>
                Size 3
              </th>
              <th>
                Size 4
              </th>
              <th>
                Size 5
              </th>
              <th>
                Size 6
              </th>
              <th>
                Size PU
              </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  3,000
                </td>
                <td>
                  625
                </td>
                <td>
                  200
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
              </tr>
        </tbody>
      </table>
    </div>
    <br />
    </div>
  )
}

export default Chart;