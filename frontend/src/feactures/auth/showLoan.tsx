import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ShowLoan() {
  const [loans, setLoans] = useState<any>([]);
  const navigate = useNavigate()
    useEffect(() => {
        async function loans() {
          const response = await fetch("http://localhost:4000/showloans", {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          //   const token = req.cookies.token; // <-- obtienes el JWT de la cookie
          try {
            if (response.ok) {
              const data = await response.json();
              setLoans(data.loans);
            }
          } catch (error) {
            console.error("error show loans");
          }
      
      };
   
      loans()
    },[])
    console.log(loans);

  return (
    <>
      <button onClick={() => navigate("/dashboard")}> Regresar </button>
      <h1> Loas active</h1>

      {/* {loans &&
        loans.map((loan) => (
          <div key={loan.id}>
            <h2>Prestamo de {loan.borrower_name}</h2>
            <p>Fecha: {loan.created_at}</p>
            <p>Monto: {loan.loan_amount}</p>
            <p>Interes: {loan.interest}</p>
            <p>Cuotas: {loan.quotas}</p>
          </div>
        ))} */}

      <table>
        <thead>
          <th> Name </th>
          <th> Date </th>
          <th> Amount </th>
          <th> Interest </th>
          <th> Quotas </th>
        </thead>
        <tbody>
          {loans &&
            loans.map((loan) => (
              <React.Fragment key={loans.user_id}>
                <tr key={loan.id}>
                  <td colSpan={5}>
                    <td>{loan.borrower_name}</td>
                    <td>
                      {new Date(loan.created_at).toLocaleDateString("es-AR")}
                    </td>
                    <td>{loan.loan_amount}</td>
                    <td>{loan.interest}</td>
                    <td>{loan.quotas}</td>
                  </td>
                </tr>

                {<tr><h1>holas</h1></tr>}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </>
  );

}
export default ShowLoan;
