import React from 'react'
const Adress = ()=>{
    let adress = {street : 'Rue de Bizerte km 6.5 Mnihla', city :'Ariana', country : 'Tunis'}
    return (
        <>
         <h2>{adress.street+' '+adress.city+' '+adress.country}</h2>
        </>
    )

}
export default Adress;