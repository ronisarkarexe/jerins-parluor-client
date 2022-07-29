import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const UpdateServices = () => {
   const [update, setUpdate] = useState({})

   const navigate = useNavigate()

   const { id } = useParams()

   useEffect(()=> {
      fetch(`https://whispering-sierra-36604.herokuapp.com/appointment/${id}`)
      .then(res => res.json())
      .then(data => setUpdate(data))
   },[id])

   const handelOnBlur = (e) => {
      const fields = e.target.name;
      const value = e.target.value;
      const newValue = { ...update }
      newValue[fields] = value;
      setUpdate(newValue)
   }

   const handelRegisterFrom = (e) => {
      e.preventDefault();

      const newValue = { ...update }

      fetch(`https://whispering-sierra-36604.herokuapp.com/appointment/${id}`,{
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newValue)
      })
      .then(res => res.json())
      .then(data => {
         if(data.matchedCount>0){
            MySwal.fire({
               icon: 'success',
               title: 'Wow..!',
               text: 'Services successfully updated!',
            }).then(() => {
               navigate('/admin/manageServices')
            })
         }
      })
   }

   return (
      <div>
         <div className="adminHeading">
            <h3>Review</h3>
         </div>
         <div className="p-4 w-50">
            <form onSubmit={handelRegisterFrom}>
               <label htmlFor="formGroupExampleInput" className="form-label">Service Title</label>
               <input type="text" className="form-control mb-3" defaultValue={update.name} name="name" placeholder="Title name" onBlur={handelOnBlur} required/>

               <label htmlFor="formGroupExampleInput" className="form-label">Service Price</label>
               <input type="number" className="form-control mb-3" defaultValue={update.price} name="price" placeholder="Price" onBlur={handelOnBlur} required/>

               <label htmlFor="formGroupExampleInput" className="form-label">Description</label>
               <textarea type="text" className="form-control mb-3" defaultValue={update.description}name="description" placeholder="Description" onBlur={handelOnBlur} required/>

               <input type="submit" className="form-control registerButton" value="Submit"/>
            </form>
         </div>
      </div>
   );
};

export default UpdateServices;