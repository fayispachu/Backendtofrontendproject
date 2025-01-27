import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="bg-green-600 flex items-center justify-evenly w-[100%] py-3">
        {" "}
     
       
          <Link to="/nihad">
            <h1>Nihad</h1>
          </Link>
          <Link to="/gijo">
            <h1>Gijo</h1>
          </Link>

          <Link to="/hari">
            <h1>Hari</h1>
          </Link>
        </div>
    </>
  );
}

export default Home;
