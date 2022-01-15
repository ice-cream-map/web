import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addicecream } from "../api/shopsAPI";
import { TrashIcon } from "@heroicons/react/solid";
import { selectMyShop } from "../slices/shopSlice";
import { Dialog, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";

function AddIceCreamForm() {
  const { shopId } = useSelector(selectMyShop);
  const [tags, setTags] = useState([]);
  const [flavours, setFlavours] = useState([]);
  const [counter, setCounter] = useState(0);
  const [counterFlavs, setCounterFlavs] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTag = () => {
    setTags((prevTags) => [...prevTags, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeTag = (index) => () => {
    setTags((prevTags) => [...prevTags.filter((item) => item !== index)]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const addFlavour = () => {
    setFlavours((prevFlavs) => [...prevFlavs, counterFlavs]);
    setCounterFlavs((prevCounter) => prevCounter + 1);
  };

  const removeFlavour = (index) => () => {
    setFlavours((prevFlavs) => [...prevFlavs.filter((item) => item !== index)]);
    setCounterFlavs((prevCounter) => prevCounter - 1);
  };

  function closeModal() {
    history.push("/ShopOwner");
    setIsOpen(false);
  }

  function onSubmit(formData) {
    return new Promise((resolve, reject) => {
      addicecream(shopId, formData).then(
        () => {
          setIsOpen(true);
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
                        className="t-1 mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                        {...register("name", { required: true })}
                      />
                      <div className="text-red-400">
                        {errors.name && errors.name.message}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Tags"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tags
                      </label>
                      {tags.map((index, i) => {
                        return (
                          <label key={i}>
                            <div className="flex items-center">
                              <input
                                type="text"
                                name="tags"
                                className="t-1 mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                                {...register(`tags.${index}`, {
                                  required: true,
                                })}
                              />
                              <TrashIcon
                                className="h-5 w-5 mt-3 ml-2 text-ice_cream-500 group-hover:text-ice_cream-400 cursor-pointer"
                                aria-hidden="true"
                                onClick={removeTag(index)}
                              />
                            </div>
                          </label>
                        );
                      })}
                      <button
                        type="button"
                        onClick={addTag}
                        className="inline-flex justify-center mt-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ice_cream hover:bg-ice_cream focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ice_cream"
                      >
                        Add New Tag
                      </button>

                      <div className="text-red-400">
                        {errors.tags && errors.tags.message}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Flavours"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Flavours
                      </label>
                      {flavours.map((index, i) => {
                        return (
                          <label key={i}>
                            <div className="flex items-center">
                              <input
                                type="text"
                                name="flavours"
                                className="t-1 mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-ice_cream focus:border-ice_cream sm:text-sm"
                                {...register(`flavours.${index}`, {
                                  required: true,
                                })}
                              />
                              <TrashIcon
                                className="h-5 w-5 mt-3 ml-2 text-ice_cream-500 group-hover:text-ice_cream-400 cursor-pointer"
                                aria-hidden="true"
                                onClick={removeFlavour(index)}
                              />
                            </div>
                          </label>
                        );
                      })}
                      <button
                        type="button"
                        onClick={addFlavour}
                        className="inline-flex justify-center mt-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ice_cream hover:bg-ice_cream focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ice_cream"
                      >
                        Add New Flavour
                      </button>

                      <div className="text-red-400">
                        {errors.flavours && errors.flavours.message}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Dodano pomyślnie
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Twój lód został dodany!
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-ice_cream border border-transparent rounded-md hover:bg-ice_cream-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ice_cream"
                    onClick={closeModal}
                  >
                    Go Back to shop
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddIceCreamForm;
