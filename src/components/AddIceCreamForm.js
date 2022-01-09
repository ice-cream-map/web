import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { addicecream } from "../api/shopsAPI";

const IceFlavours = [
  "Ananasowe",
  "Arbuzowe",
  "Bananowe",
  "Brzoskwiniowe",
  "Cytrynowe",
  "Czarna porzeczka",
  "Czekolada gorzka",
  "Czekolada z chili",
  "Czekoladowe",
];

const IceTags = ["Frozen Yogurt", "Sorbet", "Mochi Ice Cream"];

function AddIceCreamForm() {
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function onSubmit(formData) {
    return new Promise((resolve, reject) => {
      addicecream(5, formData).then(
        () => {
          setSuccess(true);
          resolve();
        },
        (err) => reject(err)
      );
    });
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl mt-5">
      <div className="bg-white overflow-hidden sm:rounded-lg p-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add ice cream
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

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Tags"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tags
                      </label>
                      <select
                        id="Tags"
                        className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                        {...register("Tags", { required: true })}
                      >
                        {IceTags.map((option) => (
                          <option value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="text-red-400">
                        {errors.Tags && errors.Tags.message}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Flavours"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Flavours
                      </label>
                      <select
                        id="Flavours"
                        className="t-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                        {...register("Flavours", { required: true })}
                      >
                        {IceFlavours.map((option) => (
                          <option value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="text-red-400">
                        {errors.Flavours && errors.Flavours.message}
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
    </div>
  );
}

export default AddIceCreamForm;
