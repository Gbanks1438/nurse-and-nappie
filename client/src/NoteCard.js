function NoteCard({aNote}) {

    const handleNoteDelete = () => {
        fetch(`/notes/${aNote.id}`, { 
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
      },
    })
        console.log('Notes Delete Button Pressed')
      } 

      return (
        <div className='notes-list'>
          <table>
            <thead>
              <tr>
                <th>
                  Note #{aNote.id} <button className='delete-button-rt' 
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
                      Date: {aNote.note_date}
                    </li>
                    <hr />
                    <li>
                      {aNote.comments}
                    </li>
                    <hr />
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
          )
          }
              export default NoteCard;