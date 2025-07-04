import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function inactiveLoans() {
  const navigate = useNavigate();
  const [loans, setLoans] = useState<any>([]);
  useEffect(() => {
    async function fetchInactiveLoans() {
      const respose = await fetch("http://localhost:4000/inactiveLoans", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!respose.ok) {
        console.error("Error fetching inactive loans");
        return;
      }
      try {
        const data = await respose.json();
        setLoans(data.loans);
        console.log(data.loans);
      } catch (error) {
        console.error("Error inactive loans ", error);
        return;
      }
    }

    fetchInactiveLoans();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/dashboard")}> Regresar </button>
      <h1> Loas inactive</h1>
      {loans && (
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Date </th>
              <th> Amount </th>
              <th> Interest </th>
              <th> Quotas </th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.borrower_name}</td>
                <td>{new Date(loan.created_at).toLocaleDateString("es-AR")}</td>
                <td>{loan.loan_amount}</td>
                <td>{loan.interest}</td>
                <td>{loan.quotas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default inactiveLoans;
