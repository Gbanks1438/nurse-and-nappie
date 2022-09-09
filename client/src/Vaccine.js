import { useState, useEffect } from 'react';

function Vaccine() {

    const [vaccinesArray, setVaccines] = useState( [] )

    useEffect( 
        ()=>{        
          fetch("/vaccines", {
            mode: 'cors',
            headers: {'Access-Control-Allow-Origin':'*'}
          })
          .then( r => r.json() )
          .then(
          (fetchedVaccines)=>{
          setVaccines( [ ...fetchedVaccines ] )
            }
          )
        }
      , [] )

      const vaccinesList = vaccinesArray.map((vaccine) => (
        <div>
        <table>
        <thead>
            <tr>
                <th key={vaccine}>Date:</th>
                <th key={vaccine}>Vaccine:</th>
                <th key={vaccine}>Abbreviation:</th>
                <th key={vaccine}>Dose:</th>
                <th key={vaccine}>Method:</th>
                <th key={vaccine}>Notes:</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                {vaccine.vax_date}
                </td>
                <td>
                {vaccine.vaccine}
                </td>
                <td>
                {vaccine.abbreviation}
                </td>
                <td>
                {vaccine.dose}
                </td>
                <td>
                {vaccine.method}
                </td>
                <td>
                {vaccine.vax_notes}
                </td>
            </tr>
        </tbody>
        </table>
        <hr />
        </div>
      ));

    return (
            <div className="vaccines-div">  
                    {vaccinesList}
                </div>
)
};

export default Vaccine;