import DailyNappie from './DailyNappie';
import DailyNurse from './DailyNurse';
import MonthlyNappie from './MonthlyNappie';
import { useState, useEffect } from 'react';

function Chart() {

  const [mealsFormData, setMealsFormData] = useState({
    time_start: "",
    time_end: "",
    which_breast: "",
    vitamin_d: "",
    baby_id: ""
  });  

  const [dailyFormData, setDailyFormData] = useState({
    exp_date: "",
    movement_type: "",
    diaper_changed: "",
    diaper_size: "",
    volume: "", 
    color: "",
    consistency: "",
    num_wipes_used: "",
    baby_id: ""
  });  

  const handleDailyChange = (e) => {
    setDailyFormData({
      ...dailyFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNursingChange = (e) => {
    setMealsFormData({
      ...mealsFormData,
      [e.target.name]: e.target.value,
    });
  };

  function handleDailySubmit(e) {
    e.preventDefault(e);

    const expo = { ...setDailyFormData };
    
    fetch('/expulsions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expo),
    })
      .then((r) => r.json())
      .then((documenting) => {
        console.log(documenting);
        setDailyFormData({
          exp_date: "",
          movement_type: "",
          diaper_changed: "",
          diaper_size: "",
          volume: "", 
          color: "",
          consistency: "",
          num_wipes_used: "",
          baby_id: ""
        });
      });
  }

  function handleNursingSubmit(e) {
    e.preventDefault(e);

    const nurse = { ...setMealsFormData };
    console.log(nurse);
    fetch('/meals', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nurse),
    })
      .then((r) => r.json())
      .then((documenting) => {
        console.log(documenting);
        setMealsFormData({
          time_start: "",
          time_end: "",
          which_breast: "",
          vitamin_d: "",
          baby_id: ""
        });
      });
    }

    const [expulsionsArray, setExpulsions] = useState( [] )

    useEffect( 
        ()=>{   
    fetch("/expulsions", {
      mode: 'cors',
      headers: {'Access-Control-Allow-Origin':'*'}
    })
    .then( r => r.json() )
    .then(
    (fetchedExpulsions)=>{
    setExpulsions( [ ...fetchedExpulsions ] )
      }, 
      // console.log(expulsionsArray) //infinite loop happening
    )
  }
, [expulsionsArray]
//or should it be an empty array []?
)

  return (
    <div>
         <div id="data-input">
         <h1>Nursing Data Input:</h1>
        <form onSubmit={handleNursingSubmit}>
           <label htmlFor="date">Start Time:</label>
           <input
               id="meals-input"
               type="datetime-local"
               name="time_start"
               value={mealsFormData.time_start}
               onChange={handleNursingChange}
             />
             <br />
             <label htmlFor="comments">End Time:</label>
             <input
               id="meals-input"
               type="datetime-local"
               name="time_end"
               value={mealsFormData.time_end}
               onChange={handleNursingChange}
             />
             <br />
             <label htmlFor="baby_id">Left Breast</label>
              <input
               id="meals-input"
               type="radio"
               name="Select Breast"
               value={mealsFormData.which_breast}
               onChange={handleNursingChange}
             />
               <label htmlFor="baby_id">Right Breast</label>
              <input
               id="meals-input"
               type="radio"
               name="Select Breast"
               value={mealsFormData.which_breast}
               onChange={handleNursingChange}
             />
             <br />
             <label htmlFor="baby_id">Vitamin D?</label>
             
             <input
               id="meals-input"
               type="checkbox"
               name="vitamin_d"
               value={mealsFormData.vitamin_d}
               onChange={handleNursingChange}
               
             />
             <br />
             <label htmlFor="baby_id">Baby Id:</label>
             <input
               id="daily-input"
               type="number"
               name="volume"
               value={mealsFormData.volume}
               onChange={handleNursingChange}
             />
             <br />
             <br />
             <button type="submit" className="update-button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
        </div>

      <h1><i class="fa-solid fa-person-breastfeeding"></i>Daily Nursing Chart:</h1>
      <div className="graph-chart">
        <DailyNurse />
      </div>
      <br />
      <br />
      <br />

      <div id="data-input">
         <h1>Nappie Data Input:</h1>
        <form onSubmit={handleDailySubmit}>
           <label htmlFor="date">Date:</label>
           <input
               id="daily-input"
               type="datetime-local"
               name="exp_date"
               value={dailyFormData.exp_date}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="comments">Movement Type:</label>
             <input
               id="daily-input"
               type="text"
               name="movement_type"
               value={dailyFormData.movement_type}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Diaper Changed?</label>
             <input
               id="daily-input"
               type="boolean"
               name="diaper_changed"
               value={dailyFormData.diaper_changed}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Diaper Size:</label>
             <input
               id="daily-input"
               type="number"
               name="diaper_size"
               value={dailyFormData.diaper_changed}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Volume:</label>
             <input
               id="daily-input"
               type="number"
               name="volume"
               value={dailyFormData.volume}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Color:</label>
             <input
               id="daily-input"
               type="text"
               name="color"
               value={dailyFormData.color}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Consistency:</label>
             <input
               id="daily-input"
               type="text"
               name="consistency"
               value={dailyFormData.consistency}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Number of wipes used:</label>
             <input
               id="daily-input"
               type="number"
               name="num_wipes_used"
               value={dailyFormData.num_wipes_used}
               onChange={handleDailyChange}
             />
             <br />
             <label htmlFor="baby_id">Baby Id:</label>
             <input
               id="daily-input"
               type="number"
               name="baby_id"
               value={dailyFormData.baby_id}
               onChange={handleDailyChange}
             />
             <br />
             <br />
             <button type="submit" className="update-button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
        </div>

      <h1><i class="fa-solid fa-baby"></i>Daily Nappie Chart:</h1>
      <div className="graph-chart">
        <DailyNappie />
      </div>
      <br />
      <br />
      <br />
      <h1><i class="fa-solid fa-baby"></i>Monthly Nappie Chart:</h1>
      <div className="graph-chart">
        <MonthlyNappie />
      </div>
      <div>
        <br />
        <br />
        <h4>Diaper Tally:</h4>
        <div>
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
      </div>
      <br />
    </div>
  )
}

export default Chart;