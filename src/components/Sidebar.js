import logo from "../assets/logo.png";

function Sidebar() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl w-1/5 m-5 flex justify-center">
      <img className="h-32 w-32 rounded-full" src={logo} alt="" />
    </div>
  );
}

export default Sidebar;
