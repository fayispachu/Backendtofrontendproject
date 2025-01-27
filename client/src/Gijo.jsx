import axios from "axios";
import { useEffect, useState } from "react";

function Gijo() {
  const [dataGijo, setDataGijo] = useState({});

  async function fetchData() {
    try {
      const { data } = await axios.get("http://localhost:4000/api/user/gijo");
      setDataGijo(data);
      console.log(data);
      console.log(dataGijo);
    } catch (error) {
      console.log(error, "Error und poi nokk");
    }
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h1>Page 2</h1>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-[40%] h-[80vh] bg-blue-200 flex flex-col py-24 items-center justify-center">
          <h1>Name:{dataGijo.name} </h1>
          <h1>age:{dataGijo.age}</h1>
          <h1>Email:{dataGijo.email}</h1>
        </div>
      </div>
    </>
  );
}

export default Gijo;
