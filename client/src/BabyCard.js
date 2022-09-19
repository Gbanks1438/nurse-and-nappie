function BabyCard({ aBaby }) {

    const handleBabyDelete = () => {
        fetch(`/babies/${aBaby.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        console.log('Baby Delete Button Pressed:')
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Baby ID:</th>
                        <th>First Name:</th>
                        <th>Last Name:</th>
                        <th>Gender:</th>
                        <th>Birthday:</th>
                        <th>Birth Weight:</th>
                        <th>Birth Height:</th>
                        <th>breastfeeding?</th>
                        <th>Profile Image:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {aBaby.id}
                        </td>
                        <td>
                            {aBaby.b_first_name}
                        </td>
                        <td>
                            {aBaby.b_last_name}
                        </td>
                        <td>
                            {aBaby.gender}
                        </td>
                        <td>
                            {aBaby.birth_date}
                        </td>
                        <td>
                            {aBaby.birth_weight}
                        </td>
                        <td>
                            {aBaby.birth_height}
                        </td>
                        <td>
                            {aBaby.breastfed}
                        </td>
                        <td>
                            {aBaby.baby_profile}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={handleBabyDelete}
                className="right-delete">
                Delete
            </button>
        </div>
    )
}

export default BabyCard;