import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../stores/slices/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div className="w-[100%]">
      <header className="text-center py-6 text-xl font-semibold">MENU</header>
      <main>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex">
            {menu.categories
              ? menu.categories.map((category) => (
                  <p
                    key={category.category_name}
                    className="whitespace-nowrap mx-3 "
                  >
                    {category.category_name}
                  </p>
                ))
              : ""}
          </div>
        </div>
        <section>
          {menu.categories
            ? menu.categories.map((category) => (
                <div key={category.category_name}>
                  <h1 className="text-lg font-semibold bg-[#e0e0e0] px-3 py-2">
                    {category.category_name}
                  </h1>
                  {menu.categories &&
                    category.menu.map((m) => (
                      <div key={m.name} className="flex py-3">
                        <div className="basis-[25%]">
                          <img
                            src={m.photo}
                            alt={m.name}
                          />
                        </div>
                        <div className="basis-[65%]">
                          <p className="font-semibold">{m.name}</p>
                          <p className="text-xs text-[#a9a8a8] pe-3">{m.description}</p>
                        </div>
                          <p className="font-semibold pe-3">{m.price.toLocaleString("id-ID")}</p>
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
