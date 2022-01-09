import Header from "../components/Header";
import AddShopForm from "../components/AddShopForm";
import logo from "../assets/logo.png";

const navigation = [{ name: "Dashboard", href: "#", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminPanel() {
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col">
        {/* Menu */}
        <div className="bg-white p-5 rounded-2xl shadow-2xl lg:w-1/5 m-5 flex justify-start flex-col items-center">
          <img className="h-32 w-32 rounded-full" src={logo} alt="" />
          <div className="hidden sm:block">
            <div className="flex flex-col space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="flex-1 flex-col m-5">
          <Header />
          {/* Dashboard */}
          <AddShopForm />
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
