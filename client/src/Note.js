import { useState, useEffect } from 'react';

function Note() {

    const [notesArray, setNotes] = useState([])
    const [milestonesArray, setMilestones] = useState([])

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
                <th key={note}>
                  Comment #{note.id} <button className='delete-button-rt'
                  // onClick={handleDelete}
                  >X</button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      Date: {note.note_date}
                    </li>
                    <hr />
                    <li>
                      {note.comments}
                    </li>
                    <hr />
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
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
                <th className='pink_th'>Milestone #{milestone.id}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pink_td'>
                  <ul>
                    <li>
                  Date: {milestone.ms_date}  
                    </li>
                  <hr />
                    <li>
                  Weight: {milestone.weight}  
                    </li>
                  <hr />
                    <li>
                  Height: {milestone.height}  
                    </li>
                  <hr />
                    <li>
                  {milestone.development_notes}
                    </li>
                  <hr />
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
            <button className='delete-button-rt'>X</button>
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

export default Note;