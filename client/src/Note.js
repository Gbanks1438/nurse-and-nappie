import { useState, useEffect } from 'react';
import NoteCard from "./NoteCard";
import MilestoneCard from "./MilestoneCard";
import HealthCard from './HealthCard';

function Note() {

  const [notesArray, setNotes] = useState([])

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

      const [noteData, setNoteData] = useState({
        note_date: "",
        comments: "",
        baby_id: ""
      }); 

      const handleNoteChange = (e) => {
        setNoteData({
          ...noteData,
          [e.target.name]: e.target.value,
        });
      };

      function handleNoteSubmit(e) {
        e.preventDefault(e);
    
        const note = { ...noteData };
        
        fetch('/notes/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        })
          .then((r) => r.json())
          .then((documenting) => {
            console.log(documenting);
            setNoteData({
              note_date: "",
              comments: "",
              baby_id: ""
            });
          });
      }

      const [noteToggle, setNoteToggle] = useState(false)

      const [milestoneArray, setMilestones] = useState([])

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
      
          const [milestoneToggle, setMilestoneToggle] = useState(false)
          
          const [milestoneFormData, setMilestoneFormData] = useState({
            ms_date: "",
            weight: "",
            height: "",
            development_notes: "",
            baby_id: ""
          });
          
          const handleMilestoneChange = (e) => {
            setMilestoneFormData({
              ...milestoneFormData,
              [e.target.name]: e.target.value,
            });
          };
          
          function handleMilestoneSubmit(e) {
            e.preventDefault(e);
            
            const milestone = { ...milestoneFormData };
            
            fetch("/milestones", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(milestone),
            })
            .then((r) => r.json())
            .then((documenting2) => {
              console.log(documenting2);
              setMilestoneFormData({
                ms_date: "",
                weight: "",
                height: "",
                development_notes: "",
                baby_id: ""
              });
            });
          }
    
    return ( 
      <div> 
          <h1><i class="fa-solid fa-notes-medical"></i> Notes:</h1>
        <button className="add-button" onClick={() => setNoteToggle(!noteToggle)}>Make A Note <i class="fa-solid fa-pen-to-square"></i></button>

          <br />
      {noteToggle && (
                   <div className="center-align">
                  <h2>Write Your Note Below <i class="fa-sharp fa-solid fa-pencil"></i></h2>
           <form onSubmit={handleNoteSubmit}>
           <label htmlFor="date">Date:</label>
           <input
               id="note-input"
               type="datetime-local"
               name="note_date"
               value={noteData.note_date}
               onChange={handleNoteChange}
             />
             <br />
             <label htmlFor="comments">Comments:</label>
             <input
               id="note-input"
               type="text"
               name="comments"
               value={noteData.comments}
               onChange={handleNoteChange}
             />
             <br />
             <label htmlFor="baby_id">Baby:</label>
             <input
               id="note-input"
               type="number"
               name="baby_id"
               value={noteData.baby_id}
               onChange={handleNoteChange}
             />
             <br />
             <br />
             <button type="submit" className="update-button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
           </div>
            )}
        <br />
            {notesArray.map((aNote) => {
                return (
                    <div>
                        <NoteCard
                            key={aNote.id} // For React
                            aNote={aNote} // For Us
                        />
                    </div>
                )
            })}
            <br />
            <h1><i class="fa-solid fa-calendar-check"></i> Milestones:</h1>
            <button className="add-button" onClick={() => setMilestoneToggle(!milestoneToggle)}>Mark A Milestone <i class="fa-solid fa-landmark"></i></button>

        <br />
      {milestoneToggle && (
                  <div className="center-align">
                  <h2>Document A Milestone</h2>
           <form onSubmit={handleMilestoneSubmit}>
           <label htmlFor="date">Date:</label>
           <input
               id="milestone-input"
               type="number"
               name="datetime-local"
               value={milestoneFormData.ms_date}
               onChange={handleMilestoneChange}
             />
             <br />
             <label htmlFor="weight">Weight:</label>
             <input
               id="milestone-input"
               type="number"
               name="weight"
               value={milestoneFormData.weight}
               onChange={handleMilestoneChange}
             />
             <br />
             <label htmlFor="height">Height:</label>
             <input
               id="milestone-input"
               type="number"
               name="height"
               value={milestoneFormData.height}
               onChange={handleMilestoneChange}
             />
             <br />
             <label htmlFor="notes">Development Notes:</label>
             <input
               id="milestone-input"
               type="text"
               name="notes"
               value={milestoneFormData.development_notes}
               onChange={handleMilestoneChange}
             />
             <br />
             <label htmlFor="baby_id">Baby:</label>
             <input
               id="milestone-input"
               type="number"
               name="baby_id"
               value={milestoneFormData.baby_id}
               onChange={handleMilestoneChange}
             />
             <br />
             <br />
             <button type="submit" className="update-button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
           </div>
            )}
      <br />
            {milestoneArray.map((aMilestone) => {
              return (
                <div>
                      <HealthCard 
                            key={aMilestone.id} // For React
                            talleyMs={aMilestone} // For Us
                        />
                        <MilestoneCard
                            key={aMilestone.id} // For React
                            aMilestone={aMilestone} // For Us
                        />
                    </div>
                )
            })}
            <br />
      </div>
    )
  }

export default Note;