import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addshop } from "../api/shopsAPI";

function AddShopForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function onSubmit(data) {
    const formData = new FormData();
    for (const property in data) {
      if (property === "LogoImage") {
        formData.append(property, data[property][0]);
      } else {
        formData.append(property, data[property]);
      }
    }

    return new Promise((resolve, reject) => {
      addshop(formData).then(
        () => {
          setSuccess(true);
          resolve();
        },
        (err) => {
          const errorObject = err.response.data.errors;
          console.log(errorObject);
          for (const property in errorObject) {
            console.log(errorObject[property]);
            setError(property, {
              type: "server",
              message: errorObject[property],
            });
          }
        }
      );
    });
  }

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Add ice cream shop
      </h3>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("Name", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.Name && errors.Name.message}
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="OwnerEmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      OwnerEmail
                    </label>
                    <input
                      type="email"
                      id="OwnerEmail"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("OwnerEmail", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.OwnerEmail && errors.OwnerEmail.message}
                    </div>
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="Url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Url
                    </label>
                    <input
                      type="text"
                      id="Url"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("Url", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.Url && errors.Url.message}
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="Street"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      id="Street"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("Street", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.Street && errors.Street.message}
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="City"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="City"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("City", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.City && errors.City.message}
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="Apartment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apartment
                    </label>
                    <input
                      type="text"
                      id="Apartment"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("Apartment", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.Apartment && errors.Apartment.message}
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-3">
                    <label
                      htmlFor="Zipcode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      id="Zipcode"
                      className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                      {...register("Zipcode", { required: true })}
                    />
                    <div className="text-red-400">
                      {errors.Zipcode && errors.Zipcode.message}
                    </div>
                  </div>
                  <div className="col-span-12">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm justify-center text-gray-600">
                          <label
                            htmlFor="LogoImage"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-ice_cream hover:text-ice_cream focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ice_cream"
                          >
                            <span>Upload a file</span>
                            <input
                              id="LogoImage"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              {...register("LogoImage", { required: true })}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    <div className="text-red-400">
                      {errors.LogoImage && errors.LogoImage.message}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ice_cream hover:bg-ice_cream focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ice_cream"
                >
                  Save
                </button>
                {success && <div className="mt-5">Dodano pomyślnie</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddShopForm;
