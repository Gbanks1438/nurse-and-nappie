import { useState, useEffect } from 'react';
import { Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ComposedChart, Scatter } from 'recharts';

function DailyNurse () {

    //Need to fetch this raw data from the API
    //Use a function to translate the values over to the chart
    //time = time_start
    //Left_Breast or Right_Breast would = time_end - time_start
    //A conditional to pick Left or Right / Left_Breast or Right_Breast
    //vitamin_d boolean True = 10 False = 0

    const [mealsArray, setMeals] = useState([])

    useEffect(
        () => {
            fetch("/meals", {
                mode: 'cors',
                headers: { 'Access-Control-Allow-Origin': '*' }
            })
                .then(r => r.json())
                .then(
                    (fetchedMeals) => {
                        setMeals([...fetchedMeals])
                    }
                )
        }
        , [])

    const [mealData, setMealData] = useState({
      time_start: "",
      time_end: "",
      which_breast: "",
      vitamin_d: "",
      baby: ""
    });

  const dailyNursingData = [
    //SAMPLE DATA FOR DISPLAY ONLY
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

    return (
        <div>
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
    )
};

export default DailyNurse;