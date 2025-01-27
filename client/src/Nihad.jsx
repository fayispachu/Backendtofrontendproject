import axios from "axios";
import { useState } from "react";

function Nihad() {
  const [dataNihad, setDataNihad] = useState({});

  async function fetchData() {
    try {
      const { data } = await axios.get("http://localhost:4000/api/nihad");
      setDataNihad(data);
      console.log(data);
      console.log(dataNihad);
    } catch (error) {
      console.log(error, "Error und poi nokk");
    }
  }
  fetchData();

  return (
    <>
      <h1>Page 1</h1>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-[40%] h-[80vh] bg-blue-200 flex flex-col py-24 items-center justify-center">
          <h1>Name:{dataNihad.name} </h1>
          <h1>age:{dataNihad.age}</h1>
          <h1>Email:{dataNihad.email}</h1>
        </div>
      </div>
    </>
  );
}

export default Nihad;
