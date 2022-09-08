import { useState, useEffect } from 'react';
import NoteCard from "./NoteCard";
import MilestoneCard from "./MilestoneCard";

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
    
    return (    
          <div className="notes-div">
          <h1><i class="fa-solid fa-notes-medical"></i> Notes:</h1>
        <button className="add-button" onClick={() => setNoteToggle(!noteToggle)}>Make A Note <i class="fa-solid fa-pen-to-square"></i></button>

          <br />
      {noteToggle && (
                  <div>
                  <h2>Write Your Note Below</h2>
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
             <button type="submit" className="Button">Save <i class="fa-solid fa-floppy-disk"></i></button>
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
        <MilestoneCard/>
      </div>
    )
  }

export default Note;