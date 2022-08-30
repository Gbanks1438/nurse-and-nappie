import { useState, useEffect } from 'react';

function NoteCard({aNote}) {

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

    const handleNoteDelete = () => {
        fetch(`/notes/${aNote.id}`, { 
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
      },
    })
    console.log('What are aNote/aNote.id? ',aNote, aNote.id)
        console.log('Notes Delete Button Pressed')
      }

      const [noteFormData, setNoteFormData] = useState({
        note_date: "",
        comments: "",
        baby_id: ""
      });  

      const handleNoteChange = (e) => {
        setNoteFormData({
          ...noteFormData,
          [e.target.name]: e.target.value,
        });
      };

      function handleNoteSubmit(e) {
        e.preventDefault(e);
    
        const note = { ...noteFormData };
        
        fetch(`/notes/${aNote.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        })
          .then((r) => r.json())
          .then((documenting) => {
            console.log(documenting);
            setNoteFormData({
              note_date: "",
              comments: "",
              baby_id: ""
            });
          });
      }

      const [noteToggle, setNoteToggle] = useState(false)

      const notesList = notesArray.map((note) => (
        <div className='notes-list'>
          <table>
            <thead>
              <tr>
                <th key={note}>
                  Note #{note.id} <button className='delete-button-rt' 
                  onClick={handleNoteDelete}
                  >X</button>
                  </th>
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

      return (
        <div>
        <h1><i class="fa-solid fa-notes-medical"></i> Notes:</h1>
        <div className="notes-div">
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
               value={noteFormData.note_date}
               onChange={handleNoteChange}
             />
             <br />
             <label htmlFor="comments">Comments:</label>
             <input
               id="note-input"
               type="text"
               name="comments"
               value={noteFormData.comments}
               onChange={handleNoteChange}
             />
             <br />
             <label htmlFor="baby_id">Baby:</label>
             <input
               id="note-input"
               type="number"
               name="baby_id"
               value={noteFormData.baby_id}
               onChange={handleNoteChange}
             />
             <br />
             <br />
             <button type="submit" className="Button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
           </div>
            )}
      <br />
          {notesList}
        </div>
        </div>
          )
          }
              export default NoteCard;