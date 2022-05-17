import { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart() {

  const [notesArray, setNotes] = useState([])
  const [milestonesArray, setMilestones] = useState([])

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

  useEffect(
    () => {
      fetch("/notes", {
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then(r => r.json())
        .then(
          (fetchedNotes) => {
            setNotes([...fetchedNotes])
          }
        )
    }
    , [])

  const notesList = notesArray.map((note) => (
    <div className='notes-list'>
      <table>
        <thead>
          <tr>
            <th key={note}>Comments:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              # {note.id}  <hr />
              Date: {note.note_date}  <hr />
              {note.comments}
            </td>
          </tr>
        </tbody>
      </table>
      <button className='delete-button-rt'
            // onClick={handleDelete}
            >Delete</button>
      <hr />
    </div>
  ));

  useEffect(
    () => {
      fetch("/milestones", {
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then(r => r.json())
        .then(
          (fetchedMilestones) => {
            setMilestones([...fetchedMilestones])
          }
        )
    }
    , [])

  const milestonesList = milestonesArray.map((milestone) => (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th className='pink_th'>Date:</th>
            <th className='pink_th'>Weight:</th>
            <th className='pink_th'>Height:</th> */}
            <th className='pink_th'>Notes:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td className='pink_td'>
              {milestone.ms_date}
            </td>
            <td className='pink_td'>
              {milestone.weight}
            </td>
            <td className='pink_td'>
              {milestone.height}
            </td> */}
            <td className='pink_td'>
              Date: {milestone.ms_date}  <hr />
              Weight: {milestone.weight}  <hr />
              Height: {milestone.height}  <hr />
              {milestone.development_notes}
            </td>
          </tr>
        </tbody>
      </table>
      <button className='delete-button-rt'>Delete</button>
      <hr />
    </div>
  ));

//   const handleDelete = () => {
//     fetch(`/notes/${note.id}`, { 
//       method: 'DELETE',
//       headers: {
//         'Content-type': 'application/json',
//   },
// })
//     console.log('Did it delete the note?')
//   }

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
      <br />
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
      </div>
    </div>
  )
}

export default Chart;