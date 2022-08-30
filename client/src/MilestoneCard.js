import { useState, useEffect } from 'react';

function MilestoneCard({aMilestone}) {

    const [milestonesArray, setMilestones] = useState([])

    const handleMilestoneDelete = () => {
        fetch(`/milestones/${aMilestone.id}`, { 
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
      },
    })
        console.log('What are aMilestone/aMilestone.id? ',aMilestone, aMilestone.id)
        console.log('Milestone Delete Button Pressed')
      }

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
                <th className='pink_th'>Milestone #{milestone.id}  <button className='delete-button-rt' 
                onClick={handleMilestoneDelete}
                >X</button></th>
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
          <hr />
        </div>
      ));

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
              <br />
        <h1><i class="fa-solid fa-calendar-check"></i> Milestones:</h1>
        <div className="milestones-div">
        <button className="add-button" onClick={() => setMilestoneToggle(!milestoneToggle)}>Mark A Milestone <i class="fa-solid fa-landmark"></i></button>

        <br />
      {milestoneToggle && (
                  <div>
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
             <button type="submit" className="Button">Save <i class="fa-solid fa-floppy-disk"></i></button>
           </form>
           </div>
            )}
      <br />

          {milestonesList}
        </div>
        </div>
    )
}
              export default MilestoneCard;