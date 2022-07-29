import React from 'react';
import { useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';


const AllUsers = () => {

   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      fetch('https://whispering-sierra-36604.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
         setUsers(data)
         setLoading(true)
      })
   },[])

   return (
      <div>
         <div className="adminHeading">
            <h3>All Users</h3>
         </div>

         {!loading? 
            <div className="d-flex justify-content-center mt-5">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>:
            <div>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                  </tr>
               </thead>
               {
               users.map(user => 
               <tbody key={user._id}>
                  <tr>
                     <td>{user.displayName}</td>
                     <td>{user.email}</td>
                     <td className="text-capitalize">{user.role}</td>
                  </tr>
               </tbody>)
               }
            </Table>
         </div>}
      </div>
   );
};

export default AllUsers;