function HealthCard({ theBaby, talleyMs}) {
console.log(talleyMs)

    function ageCalc(bday) { 
        const age_diff = Date.now() - bday.getTime();
        const date = new Date(age_diff); 
      
        return Math.abs(date.getUTCFullYear() - 1970);
    }

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
                    <td>
                    ?
                    {/* {ageCalc} */}
                
                    </td>
                    <td>
                    ?
                       </td>
                    <td>
                        ?
                        {/* figure out where to get this info from or how to change database */}
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