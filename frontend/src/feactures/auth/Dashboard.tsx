import { useEffect,useState } from "react";
import axios from'axios'
import { useNavigate } from "react-router-dom";
const Dashboard=()=> {

const [userData, setUserData] = useState(null);
const navigate = useNavigate();

useEffect(()=>{
  axios.get('http://localhost:4000/dashboard',{
    withCredentials:true
  })
  .then(res=>{
    setUserData(res.data)
  })
  .catch (err=>{
console.error("no tiene  acceso")
navigate("/login")
  });
  
},[])

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}   
export default Dashboard;