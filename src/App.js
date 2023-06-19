import React, {useState, useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Login from './UserAccount/components/Login';
import Layout from './UserAccount/components/Layout';
import Profile from './UserAccount/pages/Profile';
import Home from './UserAccount/pages/Home';
import Bank from './UserAccount/pages/Bank';
import History from './UserAccount/pages/History';
import Help from './UserAccount/pages/Help';




import Loans from './UserAccount/pages/Loans/Loans';


import './User.css';

import './Admin.css';

import AdminLayout from './Admin/AdminComponents/AdminLayout';
import AdminHome from './Admin/AdminPages/AdminHome';
import UsersLoan from './Admin/AdminPages/UsersLoan';
import User from './Admin/AdminPages/User';
import FAQ from './Admin/AdminPages/Help/FAQ';

import AddQuestion from './Admin/AdminPages/Help/AddQuestion';
import Accounts from './Admin/AdminPages/Accounts';
import UsersActive from './Admin/AdminPages/Users/UsersActive';
import SignUp from './UserAccount/components/SignUp';
import LoginAdmin from './Admin/AdminPages/LoginAdmin';
import Profile2 from './UserAccount/pages/Profile/UserAccountDetail.jsx';
import GetLoan from './UserAccount/pages/Loans/GetLoan';
import ForgotPassword from './UserAccount/components/ForgotPassword';
import Recover from './UserAccount/components/Recover';
import axios from 'axios';
import Profile1 from './UserAccount/pages/Profile1';
import { ProtectedRoutes } from './context/ProtectedRoutes';

import AllLoans from './UserAccount/pages/Loans/AllLoans';
import AuthLoan from './Admin/AdminPages/Users/AuthLoan';
import PendLoan from './Admin/AdminPages/Users/PendLoan';
import CurrentLoan from './Admin/AdminPages/Users/CurrentLoan';
import { useAuth } from './context/AuthProvider';
import UsersInactive from './Admin/AdminPages/Users/UserInactive';
// import { useAuthContext } from './hooks/useAuthContext';
// import { ProtectedRoutes } from './context/ProtectedRoutes';

// import { ProtectedRoutes } from './context/ProtectedRoutes';

// import swal from 'sweetalert';


axios.defaults.baseURL ='https://dev.symoletech.com.ng/public/api/v1/'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.interceptors.request.use( function (config)
 
{
 
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


const App = () => {

  // const {user} = useAuthContext()

  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   () => localStorage.getItem('token') !== null  );
 

  //   // useEffect(() => {
  //   //   localStorage.setItem('token', JSON.stringify(isLoggedIn));
  //   // }, [isLoggedIn]);



  //   const logIn = () => setIsLoggedIn(true);

  //   // pass this callback to components you want to allow logging out
  //   // it will update the local state and then get persisted
  //   const logOut = () => setIsLoggedIn(false);

    

    // const [isLoggedIn, setIsLoggedIn] = useState(null)

    // useEffect(() => {

    //   let token = localStorage.getItem('token')
    //   token && JSON.parse(token) ? setIsLoggedIn(true) : setIsLoggedIn(false);
    // }, []);

    // useEffect(() => {
    //   localStorage.setItem("token", isLoggedIn);
    // }, [isLoggedIn]);

  
  return (

    <Routes>
      
      { /*-----ADMIN------*/}


          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path='/accounts'>
            <Route index element={<ProtectedRoutes><Accounts /></ProtectedRoutes>} />
          </Route>
          
          <Route path='/add'>
            <Route index element={<ProtectedRoutes><AddQuestion /></ProtectedRoutes>} />
          </Route>

          <Route path='/usersActive'>
            <Route index element={<ProtectedRoutes><UsersActive /></ProtectedRoutes>} />
          </Route>

          <Route path='/usersInactive'>
          <Route index element={<ProtectedRoutes><UsersInactive /></ProtectedRoutes>} />
          </Route>


          <Route path='/user/loan/auth'  element={<ProtectedRoutes><AuthLoan/></ProtectedRoutes>} />
          <Route path='/user/loan/pend'  element={<ProtectedRoutes><PendLoan/></ProtectedRoutes>} />
          <Route path='/user/loan/approve'  element={<ProtectedRoutes><CurrentLoan/></ProtectedRoutes>} />
      
          <Route path='admin/users'>
            <Route index element={<ProtectedRoutes><User /></ProtectedRoutes> } />
          </Route>

          { /*------RE-DIRECTS------*/ }

          <Route path='/admin/users/help' element={  <Navigate to='/admin/help' /> } />
          <Route path='/admin/users/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/admin/users' element={  <Navigate to='/admin/help' /> } />
          <Route path='/accounts/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/accounts/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/accounts/help' element={  <Navigate to='/admin/help' /> } />
          <Route path='/usersActive/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/usersActive/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/usersActive/help' element={  <Navigate to='/admin/help' /> } />

          <Route path='/usersInactive/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/usersInactive/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/usersInactive/help' element={  <Navigate to='/admin/help' /> } />


          <Route path='/add/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/add/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/add/help' element={  <Navigate to='/admin/help' /> } />

          <Route path='/user/loan/auth/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/user/loan/auth/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/user/loan/auth/help' element={  <Navigate to='/admin/help' /> } />

          <Route path='/user/loan/pend/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/user/loan/pend/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/user/loan/pend/help' element={  <Navigate to='/admin/help' /> } />

          <Route path='/user/loan/approve/loans' element={  <Navigate to='/admin/loans' /> } />
          <Route path='/user/loan/approve/users' element={  <Navigate to='/admin/users' /> } />
          <Route path='/user/loan/approve/help' element={  <Navigate to='/admin/help' /> } />



          <Route path='users' index element={<User />} />
       
          <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<AdminHome />} />
              <Route exact path='loans' element={<UsersLoan />} />
              <Route exact path='help' element={<FAQ />} />
          </Route>


      { /*-----HOME-------*/ }

      
        <Route path="/recover" element={<Recover />} />
        <Route path="/forget" element={<ForgotPassword />} />
       
        <Route path="/register" element={<SignUp />} />

        <Route path='/profile'>
         <Route index element={<Profile />} />
         <Route path='profile2' element={<Profile2 />} />
        </Route>

        
        

        <Route path='/createloan' element={< AllLoans />} />
        
        <Route exact path="profile"  element={<Navigate to='/profile' />} />
        <Route path='/' element={  <Navigate to='/login' /> } />


        <Route path="/login" element={<Login />}  />
    
         <Route  path='/home' element={<Layout />} >
              <Route index element={<Home /> } />
              <Route exact path="loans" element={ <Loans /> } />
              <Route exact path="getloan" element={<GetLoan />} />
              <Route exact path="profile1" element={<Profile1 /> } />
              <Route path="bank" element={<Bank />} />
              <Route path="history" element={<History />} />
              <Route exact path="help" element={<Help />} />
        </Route>
         
    </Routes>


  );

  
}

export default App;



        // <Route element={<ProtectedRoutes />} >
        // <Route  element={<Layout />} >
        //   <Route path='/home'>
        //     <Route index element={<Home /> } />
        //     <Route exact path="loans" element={<Loans />} />
        //     <Route exact path="profile1" element={<Profile1 />} />
        //     <Route path="history" element={<History />} />
        //     <Route exact path="help" element={<Help />} />
        //   </Route>
        // </Route>
        // </Route>


// <Route index element={isLoggedIn ? <Home /> : <Navigate to='/login'/>} />
// <Route path="/login" element={<Login onLogIn={logIn} />}/>

// <Route path='/admin' element={<Navigate to='/ad-login' />} />


//        <Route path='//home/accounts' element={<Accounts />} />
//         <Route path='/loans/accounts' element={<Accounts />} />
//         <Route path='/help/add' element={<AddQuestion />} />
//         <Route path="//home/users/usersActive" element={<UsersActive />} />
//         <Route path="//home/users" element={<User />} />
//         <Route element={<AdminLayout/>}>
//           <Route path='admin'>
//             <Route index element={<AdminHome />} />
//             <Route path="loans" element={<UsersLoan />} />
//             <Route path="help" element={<FAQ />} />
//             <Route path="logout" element={<LogoutAdmin />} />
//           </Route>
//         </Route>


// <Route path="/" element={<Form />} />
//         <Route path="/login" element={<Login />} />
//         <Route exact path="/profile" element={<Profile />} />
//         <Route exact path="/loans/amount" element={<Amount />} />
//         <Route exact path="/loans/amount/personal" element={<PersonalInfo />} />
//         <Route exact path="/loans/amount/personal/bvn" element={<AccountBvn />} />
//         <Route exact path="/loans/amount/personal/bvn/valid-id" element={<VIdentification />} />
//         <Route exact path="/loans/amount/personal/bvn/valid-id/collateral" element={<CollateralCategory />} />
//         <Route exact path="/loans/amount/personal/bvn/valid-id/collateral/guarantor" element={<GuarantorForm />} />
//         <Route  element={<Layout />} >
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/loans/*" element={<Loans />} />
//             <Route exact path="/history" element={<History />} />
//             <Route exact path="/help" element={<Help />} />
//             <Route exact path="/logout" element={<LogOut />} />
//         </Route>