import Image from "@material-tailwind/react/Image";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../slices/loginSlice";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <header>
      <div className="flex items-center bg-ice_cream w-full p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://avatars.githubusercontent.com/u/91977050?s=200&v=4"
            rounded={false}
            raised={false}
            alt="Image"
            className="h-2"
          />
        </div>
        <p className="text-ice_cream-text">Hello</p>
        <button
          onClick={async () => {
            await dispatch(logout());
            history.push("/");
          }}
        >
          Log Out
        </button>
      </div>
    </header>
  );
}

export default Header;
