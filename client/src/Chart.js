// import { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis
  ,AreaChart, Legend, Area, Tooltip
} from 'recharts';

function Chart() {

  //more samples 
  const data = [
    {
      Date: "2022-04-16",
      Urine: 17,
      Feces: 5,
      Vomit: 2
    },
    {
      Date: "2022-04-17",
      Urine: 4,
      Feces: 2,
      Vomit: 1
    },
    {
      Date: "2022-04-18",
      Urine: 6,
      Feces: 5,
      Vomit: 3
    },
    {
      Date: "2022-04-19",
      Urine: 4,
      Feces: 2,
      Vomit: 3
    },
    {
      Date: "2022-04-20",
      Urine: 5,
      Feces: 3,
      Vomit: 1
    }
  ];
  //////

  // const [notesArray, setNotes] = useState([])
  // const [milestonesArray, setMilestones] = useState([])

  // //Sample chart data
  const expulsionData = [
    { name: 'Urine', incidents: 100 },
    { name: 'Feces', incidents: 55 },
    { name: 'vomit', incidents: 30 }
  ];

  const nurseData = [
    { side: 'Left Breast', time: 15 },
    { side: 'Right Breast', time: 15 },
  ];
  // //

  // useEffect(
  //   () => {
  //     fetch("/notes", {
  //       mode: 'cors',
  //       headers: { 'Access-Control-Allow-Origin': '*' }
  //     })
  //       .then(r => r.json())
  //       .then(
  //         (fetchedNotes) => {
  //           setNotes([...fetchedNotes])
  //         }
  //       )
  //   }
  //   , [])

  // const notesList = notesArray.map((note) => (
  //   <div className='notes-list'>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th key={note}>
  //             Comments: <button className='delete-button-rt'
  //             // onClick={handleDelete}
  //             >X</button></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>
  //             <ul>
  //               <li>
  //                 # {note.id}
  //               </li>
  //               <hr />
  //               <li>
  //                 Date: {note.note_date}
  //               </li>
  //               <hr />
  //               <li>
  //                 {note.comments}
  //               </li>
  //               <hr />
  //             </ul>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <hr />
  //   </div>
  // ));

  // useEffect(
  //   () => {
  //     fetch("/milestones", {
  //       mode: 'cors',
  //       headers: { 'Access-Control-Allow-Origin': '*' }
  //     })
  //       .then(r => r.json())
  //       .then(
  //         (fetchedMilestones) => {
  //           setMilestones([...fetchedMilestones])
  //         }
  //       )
  //   }
  //   , [])

  // const milestonesList = milestonesArray.map((milestone) => (
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th className='pink_th'>Notes:  <button className='delete-button-rt'>X</button></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td className='pink_td'>
  //             <ul>
  //               <li>
  //             Date: {milestone.ms_date}  
  //               </li>
  //             <hr />
  //               <li>
  //             Weight: {milestone.weight}  
  //               </li>
  //             <hr />
  //               <li>
  //             Height: {milestone.height}  
  //               </li>
  //             <hr />
  //               <li>
  //             {milestone.development_notes}
  //               </li>
  //             <hr />
  //             </ul>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <hr />
  //   </div>
  // ));

  // //   const handleDelete = () => {
  // //     fetch(`/notes/${note.id}`, { 
  // //       method: 'DELETE',
  // //       headers: {
  // //         'Content-type': 'application/json',
  // //   },
  // // })
  // //     console.log('Did it delete the note?')
  // //   }

  return (
    <div>
      <h1><i class="fa-solid fa-person-breastfeeding"></i> Nursing Chart:</h1>
      <div className="graph-chart">
        <BarChart width={1400} height={500} data={nurseData}>
          <Bar dataKey="time" fill="blue" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="side" />
          <YAxis label={"Time"} />
        </BarChart>
      </div>
      <br />
      <br />
      <br />
      <h1><i class="fa-solid fa-baby"></i> Nappie Chart:</h1>
      <div className="graph-chart">
        <BarChart width={1400} height={600} data={expulsionData}>
          <Bar dataKey="incidents" fill="brown" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </div>
      {/* <br />
      <br />
      <br />
      <hr />
      <h1><i class="fa-solid fa-notes-medical"></i> Notes:</h1>
      <div className="notes-div">
        {notesList}
      </div>
      <br />
      <br />
      <h1><i class="fa-solid fa-calendar-check"></i> Milestones:</h1>
      <div className="milestones-div">
        {milestonesList}
      </div> */}
      <div id="area-chart">
      <h2>Views</h2>
      <AreaChart
        width={700}
        height={400}
        data={data}
        // onMouseOver={() => setIsSharp(!isSharp)}
        // onMouseOut={() => setIsSharp(!isSharp)}
      >
        <Tooltip />
        <Area
          type="monotone"
          // {isSharp ? "" : "monotone"}
          dataKey="Urine"
          stroke="#bb86fc"
          fill="#bb86fc"
        />
        <Area
          type="monotone"
          // {isSharp ? "" : "monotone"}
          dataKey="Feces"
          stroke="#fa6c90"
          fill="#ff7598bf"
        />
          <Area
          type="monotone"
          // {isSharp ? "" : "monotone"}
          dataKey="Vomit"
          stroke="#fa6c90"
          fill="blue"
          // "#ff7598bf"
        />
        <CartesianGrid stroke="#666" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#000" />
        <Legend />
        <YAxis stroke="#000" />
      </AreaChart>
    </div>
  );
    </div>
  )
}

export default Chart;