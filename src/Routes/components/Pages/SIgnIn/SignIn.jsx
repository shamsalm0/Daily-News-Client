import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import './SignIn.css'
import { AuthContext } from '../../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignIn = () => {
   const{LogIn,setLoading}=useContext(AuthContext);
   const [error,setError]=useState('');
   const location=useLocation();
   const navigate=useNavigate();
   const from=location.state?.from?.pathname || '/';
   const handleSignIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    LogIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
        setError('');
        if(user.emailVerified){
            navigate(from,{replace:true})
        }
        else{
            toast.error('please verify your email')
        }
    })
    .catch(error=>{console.error(error)
    setError(error.message);
    })
    .finally(()=>{setLoading(false)})
   }
    return (
        <div className='container'>
                 <div className='sign-in sm:w-50'>
           <h2>SignIn</h2> 
           <form onSubmit={handleSignIn} action="">
            <div className="email-input mb-7">
                <h4>Email</h4>
            <input className='input-box' type="email" name='email' placeholder='Email' /> 
            </div>
            <div className="password-input mb-7">
                <h4>Password</h4>
            <input className='input-box' type="password" name='password' placeholder='Password' />
            </div>
            <button className='sign-btn'><p>Sign in</p></button>
           </form>
           <p>{error}</p>
           <p className='create-account '>new to this shop <Link className='text-blue-500' to='/signup'>create a new account</Link></p>
        </div>
        </div>
    );
};

export default SignIn;