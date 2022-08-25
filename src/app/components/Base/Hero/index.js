import { Navigate, NavLink, useLocation } from "react-router-dom";
import { hero } from "../../../data";
import { Products } from "../../Utilities";
function Hero() {
  const path = useLocation();
  return (
    <section>
      {path.pathname === "/" && <Navigate to="delivery" replace={true} />}
      <div className="border-b">
        <div className="container mx-auto flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-2 pt-5 px-2">
          {hero?.map((data) => (
            <NavLink to={data?.link} key={data?.id}>
              {({ isActive }) => (
                <div
                  className={`inline-flex items-center gap-2 font-semibold pb-3 md:px-8 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500"
                      : undefined
                  }`}
                >
                  <span
                    className={`p-3 rounded-full ${
                      isActive ? "bg-red-200" : "bg-gray-100 "
                    }`}
                  >
                    {data?.icon}
                  </span>
                  <span>{data?.title}</span>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <Products />
    </section>
  );
}

export default Hero;
