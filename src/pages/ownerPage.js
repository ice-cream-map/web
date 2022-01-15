import Header from "../components/Header";
import MyShop from "../components/MyShop";
import AddIceCreamForm from "../components/AddIceCreamForm";
import logo from "../assets/logo.png";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/ShopOwner" },
  { name: "Add ice cream", href: "/ShopOwner/Add" },
];

function OwnerPanel() {
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col">
        <Router>
          <div className="bg-white p-5 rounded-2xl shadow-2xl lg:w-1/5 m-5 flex justify-start flex-col items-center">
            <img className="h-32 w-32 rounded-full" src={logo} alt="" />
            <div className="hidden sm:block">
              <div className="flex flex-col">
                {navigation.map((item, i) => (
                  <NavLink
                    key={i}
                    exact
                    to={item.href}
                    activeClassName="bg-gray-900 text-white"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-3"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex-col m-5">
            <Header />
            <Switch>
              <Route path="/ShopOwner/Add" component={AddIceCreamForm} />
              <Route path="/ShopOwner" component={MyShop} />
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default OwnerPanel;
