function HealthCard({theBaby
    // , milestoneArray
}) {

    // function newestMs() {
        // GET THE ARRAY
    // }

    // function ageCalc() { 
  
        // const dob = new Date('February 17, 2022 03:01:00');
        // const today = new Date();
        // const monthsDiff = today.getMonth() - dob.getMonth() + (12 * (today.getFullYear() - dob.getFullYear()));
        // const el = document.getElementById("age-el");
        // el.textContent = monthsDiff + " months old";
    // }

    return (         
        <div>
        <table>
            <thead>
                <tr>
                    <th>Baby ID:</th>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Current Age:</th>
                    <th>Current Weight:</th>
                    <th>Current Height:</th>
                    <th>Profile Image:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    {theBaby.id}
                    </td>
                    <td>
                        {theBaby.b_first_name}
                    </td>
                    <td>
                        {theBaby.b_last_name}
                    </td>
                    <td id="age-el">
                    {/* {el.textContent = monthsDiff + " months old"} */}
                    {/* {ageCalc()} */}
                
                    </td>
                    <td>
                    ?
                    {/* {newestMs.weight} */}
                       </td>
                    <td>
                        ?
                        {/* {newestMs.height} */}
                    </td>
                    <td>
                        {theBaby.baby_profile}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default HealthCard;