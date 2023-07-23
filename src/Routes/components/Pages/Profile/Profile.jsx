import React, { useContext,useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
const Profile = () => {
  const{user}=useContext(AuthContext);
  const[name,setName]=useState(user?.displayName)
  const handleSubmit=e=>{
    e.preventDefault();
    console.log('Update',name,'name')
  }

  const handleName=e=>{
     setName(e.target.value);
     console.log('hi')
  }
    return (
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Update Profile
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details 
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
        <Input onChange={handleName} defaultValue={name} type='text' size="lg" label="Name" />
          <Input readOnly defaultValue={user?.email} size="lg" label="Email" />
          
        </div>
    
        <Button type='submit' className="mt-6" fullWidth>
          Update
        </Button>
        
      </form>
    </Card>
    );
};

export default Profile;