import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../slices/loginSlice";
import { selectSignin } from "../slices/loginSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { roles } = useSelector(selectSignin);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  function handleFormStateChange(e) {
    const { name, type, value, checked } = e.target;

    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(login(formState));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-42 w-auto"
            src="https://avatars.githubusercontent.com/u/91977050?s=200&v=4"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-ice_cream-500 focus:border-ice_cream-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formState.email}
                onChange={handleFormStateChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-ice_cream-500 focus:border-ice_cream-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formState.password}
                onChange={handleFormStateChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-ice_cream-600 focus:ring-ice_cream-500 border-gray-300 rounded"
                checked={formState.rememberMe}
                onChange={handleFormStateChange}
              />
              <label
                htmlFor="rrememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-ice_cream-600 hover:text-ice_cream-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ice_cream hover:bg-ice_cream-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ice_cream-500"
              onClick={handleSubmit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-ice_cream-500 group-hover:text-ice_cream-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
