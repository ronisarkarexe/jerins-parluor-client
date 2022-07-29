import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {

   //const [addService, setAddService] = useState({})

   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   const [imageUrl, setImageUrl] = useState(null)

   const imageUpload = (e) => {
      const imageData = new FormData()
      imageData.set('key', '7f929e96c72d7b41512d485755611ed8')
      imageData.append('image', e.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
       .then(function (response) {
         setImageUrl(response.data.data.display_url);
       })
       .catch(function (error) {
         console.log(error);
      });
   }

   // const handelOnBlur = (e) => {
   //    const fields = e.target.name;
   //    const value = e.target.value
   //    const newValue = {...addService}
   //    newValue[fields] = value;
   //    setAddService(newValue);
   // }

   const onSubmit = data => {
      const newData = {
         ...data,
         image: imageUrl
      }
      fetch('https://whispering-sierra-36604.herokuapp.com/appointment',{
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(data => {
         if(data.insertedId){
            alert("Data added successfully");
            reset()
         }
      })
      
   };

   /*const handelRegisterFrom = (e) => {
      e.preventDefault();

      const newData = {
         name: addService.name,
         price: addService.price,
         description: addService.description,
         image: imageUrl
      }

      fetch('https://whispering-sierra-36604.herokuapp.com/appointment',{
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if(data.insertedId){
            alert("Data added successfully");
         }
      })
   }*/

   return (
      <div>
         <div className="adminHeading">
            <h3>Add Service</h3>
         </div>

         <div className="p-4 w-50">

            <form onSubmit={handleSubmit(onSubmit)}>

               <label htmlFor="formGroupExampleInput" className="form-label">Service Title</label>
               <input type="text" className="form-control mb-3" placeholder="Service Title" {...register("name", { required: true })} />

               <label htmlFor="formGroupExampleInput" className="form-label">Service Price</label>
               <input type="number" className="form-control mb-3" placeholder="Services Price" {...register("price", { required: true })} />

               <label htmlFor="formGroupExampleInput" className="form-label">Description</label>
               <textarea type="text" className="form-control mb-3" placeholder="Description" {...register("description", { required: true })} />

               <label htmlFor="formGroupExampleInput" className="form-label">Image</label>
               <input type="file" className="form-control mb-3" name="image" {...register("image", { required: true })} onChange={imageUpload} required/>
               
               <input type="submit" className="form-control registerButton"/>
            </form>

            {/* <form onSubmit={handelRegisterFrom}>
               <label htmlFor="formGroupExampleInput" className="form-label">Service Title</label>
               <input type="text" className="form-control mb-3" name="name" placeholder="Title name" onBlur={handelOnBlur} required/>

               <label htmlFor="formGroupExampleInput" className="form-label">Service Price</label>
               <input type="number" className="form-control mb-3" name="price" placeholder="Price" onBlur={handelOnBlur} required/>

               <label htmlFor="formGroupExampleInput" className="form-label">Description</label>
               <textarea type="text" className="form-control mb-3" name="description" placeholder="Description" onBlur={handelOnBlur} required/>

               <label htmlFor="formGroupExampleInput" className="form-label">Image</label>
               <input type="file" className="form-control mb-3" name="image" onChange={imageUpload} required/>

               <input type="submit" className="form-control registerButton" value="Submit"/>
            </form> */}


         </div>
      </div>
   );
};

export default AddService;