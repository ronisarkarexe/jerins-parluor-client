import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './components/Login/PrivateRouter/PrivateRouter';
import Services from './components/Services/Services';
import OrderList from './components/Admin/OrderList';
import AddService from './components/Admin/AddService';
import MakeAdmin from './components/Admin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices';
import Book from './components/Dashboard/Book';
import BookingList from './components/Dashboard/BookingList';
import Review from './components/Dashboard/Review';
import UserDashboard from './components/Dashboard/UserDashboard';
import AllReview from './components/Admin/AllReview';
import AllUsers from './components/Admin/AllUsers';
import UpdateServices from './components/Admin/UpdateServices';
import AdminRouter from './components/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>

            <Route path="/appointment/:id" 
            element={
               <PrivateRouter>
                <Appointment/>
                </PrivateRouter>
              }/>

            <Route path="/dashboard" 
            element={
            <PrivateRouter>
              <Dashboard/>
            </PrivateRouter>
            }>
              <Route path="" element={<UserDashboard/>}/>
              <Route path="book/:bookId" element={<Book/>}/>
              <Route path="bookingList" element={<BookingList/>}/>
              <Route path="review" element={<Review/>}/>
            </Route>

            <Route path="/admin" 
            element={
              <AdminRouter>
              <Admin/>
              </AdminRouter>
            }>
              <Route path="" element={<OrderList/>}/>
              <Route path="update/:id" element={<UpdateServices/>}/>
              <Route path="addService" element={<AddService/>}/>
              <Route path="allReview" element={<AllReview/>}/>
              <Route path="allUser" element={<AllUsers/>}/>
              <Route path="makeAdmin" 
              element=
              {
              <AdminRouter>
                <MakeAdmin/>
              </AdminRouter>
              }/>
              <Route path="manageServices" element={<ManageServices/>}/>
            </Route>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
