import { Link } from "react-router-dom";
import { ProductCards } from "../../Utilities";
function ExploreProducts({ Data, title }) {
  return (
    <div className="bg-gray-100 py-5 px-2">
      <div className="container mx-auto">
        <h1 className="text-2xl text-gray-700 font-bold mb-5">{title}</h1>
        <div className="flex flex-wrap justify-center gap-y-5">
          {Data?.length &&
            Data?.map((data) => (
              <Link to={data?.cardAction?.clickUrl} key={data?.info?.resId}>
                <ProductCards item={data} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
