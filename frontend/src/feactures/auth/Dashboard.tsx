import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard", {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error("no tiene  acceso");
        navigate("/login");
      });
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.error("error logout");
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Log out</button>
      <div>
        <h1>Organizador de prestamos </h1>
        <button onClick={() => navigate("/newloan")}>
          crear un nuevo prestamo
        </button>
        <button onClick={()=>navigate("/showloans")}>prestamos activos </button>
        <button onClick={()=> navigate("/inactiveLoans")}>prestamos inactivos </button>
      </div>
    </>
  );
};
export default Dashboard;
