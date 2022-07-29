import React, { useState } from 'react';

const MakeAdmin = () => {
   const [email, setEmail] = useState('')

   const handelOnBlur = (e) => {
      setEmail(e.target.value)
   }

   const handleMakeAdmin = (e) => {
      e.preventDefault();
      const user = { email }

      fetch('https://whispering-sierra-36604.herokuapp.com/users/admin',{
         method: 'PUT',
         headers: {
            'authorization': `Bearer ${localStorage.getItem('idToken')}`,
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if(data.matchedCount>0){
            alert("added successfully")
         }
      })
   }
   return (
      <div>
         <div className="adminHeading">
            <h3>Make Admin</h3>
         </div>

         <div className="p-4 w-50">
            <form onSubmit={handleMakeAdmin}>
               <label htmlFor="formGroupExampleInput" className="form-label">Make Admin</label>
               <input type="text" className="form-control mb-3" name="name" placeholder="Title name" onBlur={handelOnBlur} required/>
               <input type="submit" className="form-control registerButton" value="Submit"/>
            </form>
         </div>
      </div>
   );
};

export default MakeAdmin;