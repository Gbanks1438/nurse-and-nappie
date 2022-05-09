import { useState, useEffect } from 'react';
// import { LineChart, Line } from 'recharts';

function Chart () {
  
  const [notesArray, setNotes] = useState( [] )
  const [milestonesArray, setMilestones] = useState( [] )
  
  // //Sample chart data
  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  // const renderLineChart = (
  //   <LineChart width={400} height={400} data={data}>
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //   </LineChart>
  // );
  // //

    useEffect( 
        ()=>{        
          fetch("/notes", {
            mode: 'cors',
            headers: {'Access-Control-Allow-Origin':'*'}
          })
          .then( r => r.json() )
          .then(
          (fetchedNotes)=>{
          setNotes( [ ...fetchedNotes ] )
            }
          )
        }
      , [] )

      const notesList = notesArray.map((note) => (
        <div>
        <table>
        <thead>
            <tr>
                <th key={note}>Date:</th>
                <th key={note}>Comments:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                {note.note_date}
                </td>
                <td>
                {note.comments}
                </td>
            </tr>
        </tbody>
        </table>
        <hr />
        </div>
      ));

      useEffect( 
        ()=>{        
          fetch("/milestones", {
            mode: 'cors',
            headers: {'Access-Control-Allow-Origin':'*'}
          })
          .then( r => r.json() )
          .then(
          (fetchedMilestones)=>{
          setMilestones( [ ...fetchedMilestones ] )
            }
          )
        }
      , [] )

      const milestonesList = milestonesArray.map((milestone) => (
        <div>
        <table>
        <thead>
            <tr>
                <th>Date:</th>
                <th>Weight:</th>
                <th>Height:</th>
                <th>Notes:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                {milestone.ms_date}
                </td>
                <td>
                {milestone.weight}
                </td>
                <td>
                {milestone.height}
                </td>
                <td>
                {milestone.development_notes}
                </td>
            </tr>
        </tbody>
        </table>
        <hr />
        </div>
      ));

    //   //example
    //  return (
    //    <>
    //    {renderLineChart}
    //    </>
    //  )
    //   //


    return (
        <div>
            <h1><i class="fa-solid fa-person-breastfeeding"></i> Nursing Chart:</h1>
            <br/>
            <h1><i class="fa-solid fa-baby"></i> Nappie Chart:</h1>
            <br/><br/>
            <h1><i class="fa-solid fa-notes-medical"></i> Notes:</h1>
                <div className="notes-div">  
                    {notesList}
                </div>
            <br/><br/>
            <h1><i class="fa-solid fa-calendar-check"></i> Milestones:</h1>
            <div className="milestones-div">  
                    {milestonesList}
                </div>
        </div>
    )
}

export default Chart;