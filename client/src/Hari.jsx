import axios from "axios";
import { useEffect, useState } from "react";
function Hari() {
  const [dataHari, setDataHari] = useState({});
  async function fetchData() {
    try {
      const { data } = await axios.get("http://localhost:4000/api/user/hari");

      setDataHari(data);
      console.log(dataHari);
    } catch (error) {
      console.log(error, "Error und poi nokk");
    }
  }

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h1>Page 3</h1>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-[40%] h-[80vh] bg-blue-200 flex flex-col items-center py-24 justify-center">
          <h1>Name:{dataHari.name} </h1>
          <h1>age:{dataHari.age}</h1>
          <h1>Email:{dataHari.email}</h1>
        </div>
      </div>
    </>
  );
}

export default Hari;
