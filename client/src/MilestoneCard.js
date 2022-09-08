function MilestoneCard({aMilestone}) {
  
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
         
return (
        <div>
          <table>
            <thead>
              <tr>
                <th className="pink_th">
                  Milestone #{aMilestone.id} <button className='delete-button-rt' 
                  onClick={handleMilestoneDelete}
                  >X</button>
                  </th>
              </tr> 
            </thead>
            <tbody>
              <tr>
                <td className="pink_td">
                  <ul>
                    <li>
                      Date: {aMilestone.ms_date}
                    </li>
                    <hr />
                    <li>
                      Weight: {aMilestone.weight}
                    </li>
                    <hr />
                    <li>
                      Height: {aMilestone.height}
                    </li>
                    <hr />
                    <li>
                      {aMilestone.development_notes}
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
              export default MilestoneCard;