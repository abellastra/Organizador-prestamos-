import { useState } from "react";
import { useNavigate } from "react-router-dom";

function newLoan() {
  const [borrower_name, setBorrower_name] = useState<any>("");
  const [date, setDate] = useState("");
  const [amuontOfMoney, setAmuontOfMoney] = useState<any>(null);
  const [interest, setInterest] = useState<any>(null);
  const [quotas, setQuotas] = useState<any>(null);

    const navigate =useNavigate()

  async function sendRequesLoan(e: React.FormEvent<HTMLFormElement>) {
    console.log("newloan");
    e.preventDefault();

    const response = await fetch("http://localhost:4000/newloan", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        borrower_name,
        date,
        amuontOfMoney,
        interest,
        quotas,
      }),
    });
    try {
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("error al crear un prestamo", error);
    }
  }

  return (
    <>
      <button onClick={()=>navigate('/dashboard')}> salir</button>
      <h1>New loan</h1>

      <form onSubmit={sendRequesLoan}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setBorrower_name(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="amount_of_money">Amount of money</label>
        <input
          type="number"
          id="amount_of_money"
          onChange={(e) => setAmuontOfMoney(e.target.value)}
        />

        <label htmlFor="interest">Interest</label>
        <input
          type="number"
          value={interest}
          id="interest"
          onChange={(e) => setInterest(e.target.value)}
        />

        <label htmlFor="quotas">Monthly installaments</label>
        <input
          type="number"
          id="quotas"
          onChange={(e) => setQuotas(e.target.value)}
        />
        <button type="submit">Save loan </button>
      </form>
    </>
  );
}
export default newLoan;
