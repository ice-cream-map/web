import React, { useEffect, useState } from "react";
import { myshop } from "../api/shopsAPI";
import { auth } from "../utils/auth";
import { setShopId } from "../slices/shopSlice";
import { useDispatch } from "react-redux";

function MyShop() {
  const [shop, setShop] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    return new Promise(async (resolve, reject) => {
      const token = auth.getToken();
      try {
        const { id, ...res } = await myshop(token);
        dispatch(setShopId(id));
        setShop({ ...res });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }, [dispatch]);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-2xl mt-5">
      <div className="bg-white overflow-hidden sm:rounded-lg">
        {shop ? (
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="px-4 py-5 sm:px-6 flex justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  My Shop
                </h3>
                <div className="logo">
                  <img
                    className="h-32 w-32 rounded-full"
                    src={shop.photoUrl}
                    alt=""
                  />
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {shop.name}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      City/Zipcode
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {shop.address &&
                        shop.address.city + " " + shop.address.zipcode}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Street/Apartment
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {shop.address &&
                        shop.address.street + " " + shop.address.apartment}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Url</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {shop.url}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="col-span-6">
              <div className="p-5">
                {shop.iceCreams &&
                  shop.iceCreams.map((iceCream, i) => (
                    <div key={i} className="shadow rounded-xl p-5">
                      <h4 className="font-medium text-lg leading-6 text-gray-900">
                        {iceCream.name}
                      </h4>
                      <div className="flex items-center my-3 text-sm flex-wrap">
                        Tags:
                        <span
                          key={iceCream.id}
                          className="px-4 py-2 mx-1 rounded-full text-green-500 bg-green-200 font-semibold text-xs flex align-center w-max active:bg-gray-300 transition duration-300 ease"
                        >
                          {iceCream.tags}
                        </span>
                      </div>
                      <div className="flex items-center text-sm flex-wrap">
                        Flavours:
                        {iceCream.flavours.map((flavour, i) => (
                          <span
                            key={flavour}
                            className="px-4 py-2 m-1 rounded-full text-blue-500 bg-blue-200 font-semibold text-xs flex align-center w-max active:bg-gray-300 transition duration-300 ease"
                          >
                            {flavour}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div>not found</div>
        )}
      </div>
    </div>
  );
}

export default MyShop;
