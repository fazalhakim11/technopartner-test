import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMenu } from "../../stores/slices/menuSlice";
import Navbar from "../../components/navbar";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menu);
  const token = useSelector((state) => state.login.token);
  const token_type = useSelector((state) => state.login.token_type);

  useEffect(() => {
    dispatch(getMenu(token, token_type));
  }, []);

  const [catName, setCatName] = useState("Seasonal menu");

  const categoryClicked = (cat_name) => {
    setCatName(cat_name);
  };

  return (
    <div className="w-[100%] relative">
      <Navbar />
      <div className="fixed top-0">
        <header className=" bg-white text-center py-6 text-xl font-semibold ">
          MENU
        </header>
        <div className="max-w-[100vw] md:max-w-[450px] bg-white overflow-x-auto hide-scrollbar">
          <div className="flex">
            {menu.categories
              ? menu.categories.map((category) => (
                  <div
                    key={category.category_name}
                    className={`px-3 py-3 ${
                      catName === category.category_name
                        ? "border-b-4 border-black text-black"
                        : "text-[#a5a5a5]"
                    }`}
                  >
                    <button
                      onClick={() => categoryClicked(category.category_name)}
                    >
                      <a
                        href={`#${category.category_name}`}
                        className="whitespace-nowrap font-semibold"
                      >
                        {category.category_name}
                      </a>
                    </button>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <main className="mb-[80px] mt-[128px]">
        <section>
          {menu.categories
            ? menu.categories.map((category) => (
                <div key={category.category_name}>
                  <h1
                    id={category.category_name}
                    className="text-lg font-semibold bg-[#e0e0e0] px-3 py-2"
                  >
                    {category.category_name}
                  </h1>
                  {menu.categories &&
                    category.menu.map((m) => (
                      <div key={m.name} className="flex py-3">
                        <div className="basis-[25%]">
                          <img src={m.photo} alt={m.name} />
                        </div>
                        <div className="basis-[65%]">
                          <p className="font-semibold">{m.name}</p>
                          <p className="text-xs text-[#a9a8a8] pe-3">
                            {m.description}
                          </p>
                        </div>
                        <p className="font-semibold pe-3">
                          {m.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    ))}
                </div>
              ))
            : ""}
        </section>
      </main>
    </div>
  );
};

export default Menu;
