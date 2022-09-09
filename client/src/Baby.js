import { useState, useEffect } from 'react';
import BabyCard from './BabyCard.js'
// import Vaccine from './Vaccine.js'

function Baby() {

    const [babiesArray, setBabies] = useState([])

    useEffect(
        () => {
            fetch("/babies", {
                mode: 'cors',
                headers: { 'Access-Control-Allow-Origin': '*' }
            })
                .then(r => r.json())
                .then(
                    (fetchedBabies) => {
                        setBabies([...fetchedBabies])
                    }
                )
        }
        , [])

    const [babyData, setBabyData] = useState({
        b_first_name: "",
        b_last_name: "",
        gender: "",
        birth_date: "",
        birth_weight: "",
        birth_height: "",
        breastfed: "",
        baby_profile: ""
    });

    const handleBabyChange = (e) => {
        setBabyData({
            ...babyData,
            [e.target.name]: e.target.value,
        });
    };

    const [babyToggle, setBabyToggle] = useState(false)

    function handleBabySubmit(e) {
        e.preventDefault(e);

        const baby = { ...babyData };

        fetch(`/babies/${baby.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(baby),
        })
            .then((r) => r.json())
            .then((documenting) => {
                console.log(documenting);
                setBabyData({
                    b_first_name: "",
                    b_last_name: "",
                    gender: "",
                    birth_date: "",
                    birth_weight: "",
                    birth_height: "",
                    breastfed: "",
                    baby_profile: ""
                });
            });
    }

    return (
        <div className="center-align">
            <h1><i class="fa-solid fa-notes-medical"></i> Babies:</h1>
            <div>
                <button className="add-button" onClick={() => setBabyToggle(!babyToggle)}>Create baby profile <i class="fa-solid fa-pen-to-square"></i></button>
                <br />
                {babyToggle && (
                    <div>
                        <h2>Enter Your information Below</h2>
                        <form onSubmit={handleBabySubmit}>
                            <label htmlFor="f-name">First Name:</label>
                            <input
                                id="f-name-input"
                                type="text"
                                name="b_first_name"
                                value={babyData.b_first_name}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="l-name">Last Name:</label>
                            <input
                                id="l-name-input"
                                type="text"
                                name="b_last_name"
                                value={babyData.b_last_name}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="gender">Gender:</label>
                            <input
                                id="gender-input"
                                type="text"
                                name="gender"
                                value={babyData.gender}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="birthday">Birthday:</label>
                            <input
                                id="birthday-input"
                                type="datetime-local"
                                name="birth_date"
                                value={babyData.birth_date}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="weight">Birth Weight:</label>
                            <input
                                id="weight-input"
                                type="text"
                                name="birth_weight"
                                value={babyData.birth_weight}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="height">Birth Height:</label>
                            <input
                                id="height-input"
                                type="text"
                                name="birth_height"
                                value={babyData.birth_height}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="breastfed">Breastfed?</label>
                            <input
                                id="breastfed-input"
                                type="boolean"
                                name="breastfed"
                                value={babyData.breastfed}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="profile pic">Profile Picture:</label>
                            <input
                                id="profile-input"
                                type="text"
                                name="baby_profile"
                                value={babyData.baby_profile}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <label htmlFor="user_id">User:</label>
                            <input
                                id="user-input"
                                type="number"
                                name="user_id"
                                value={babyData.user_id}
                                onChange={handleBabyChange}
                            />
                            <br />
                            <br />
                            <button type="submit" className="update-button">Save <i class="fa-solid fa-floppy-disk"></i></button>
                        </form>
                    </div>
                )}
     
            </div>
            <br />
            {babiesArray.map((aBaby) => {
                return (
                    <div>
                        <BabyCard
                            key={aBaby.id} // For React
                            aBaby={aBaby} // For Us
                        />
                    </div>
                )
            })}
            <br />
            <br />
            <h1><i class="fa-solid fa-heart-circle-exclamation"></i> Health Stats:</h1>
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
                            {/* {aBaby.id} */}
                        </td>
                        <td>
                            {/* {aBaby.b_first_name} */}
                        </td>
                        <td>
                            {/* {aBaby.b_last_name} */}
                        </td>
                        <td>
                        {/* figure out how to make code to use the birth date and the current time to solve for age */}
                        </td>
                        <td>
                           {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                            {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                            {/* {aBaby.baby_profile} */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
            <br />
            <h1><i class="fa-solid fa-syringe"></i> Vaccines:</h1>
            {/* <Vaccine /> */}
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Baby ID:</th>
                        <th>Date Administered:</th>
                        <th>Name:</th>
                        <th>Abbreviation:</th>
                        <th>Dose:</th>
                        <th>Method:</th>
                        <th>Notes:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                            {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                             {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                        {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                           {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                            {/* figure out where to get this info from or how to change database */}
                        </td>
                        <td>
                           {/* figure out where to get this info from or how to change database */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
};

export default Baby;