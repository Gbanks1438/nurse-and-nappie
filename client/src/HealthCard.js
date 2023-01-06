function HealthCard({ theBaby }) {

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
                        ?
                    </td>
                    <td>
                        {theBaby.b_first_name}
                    </td>
                    <td>
                        {theBaby.b_last_name}
                    </td>
                    <td>
                        ?
                    {/* figure out how to make code to use the birth date and the current time to solve for age */}
                    </td>
                    <td>
                        ?
                       {/* figure out where to get this info from or how to change database */}
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