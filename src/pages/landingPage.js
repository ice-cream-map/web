import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

function LandingPage() {
  return (
    <main className="max-w-screen-2xl mx-auto flex">
      {/* Menu */}
      <Sidebar />
      {/* Header */}
      <div className="flex-1 flex-col m-5">
        <Header />
        {/* Dashboard */}
        <Dashboard />
      </div>
    </main>
  );
}

export default LandingPage;
