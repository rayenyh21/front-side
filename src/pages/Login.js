import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { LoginUser } from '../redux/slices/userSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css';


const Login = () => {

  const {isAuth}= useSelector((state)=> state.user)
  const navigate= useNavigate()
   useEffect(()=>{
    if(isAuth){
      navigate("/home")
    }
  },[isAuth])
  const dispatch= useDispatch()


  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = data => {
    dispatch(LoginUser(data))}
  console.log(errors);
  return (
    <>
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        
      <input type="email" placeholder="Email" {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true, min: 8, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
     
      <input type="submit" />
    </form>
    </div>
    
    <div>
      <footer>
        2023-2024 © Copyright MyWay.tn. All Rights Reserved.
      </footer>

</div>
</>
  )
}

export default Login
