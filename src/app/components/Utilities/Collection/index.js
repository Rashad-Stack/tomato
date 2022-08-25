import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductSlider } from "../../Utilities";

function Collection({ Data }) {
  return (
    <div className="bg-gray-100 py-5">
      <div className="container mx-auto px-2">
        <h1 className="text-2xl text-gray-700 font-bold mb-2">Collections</h1>
        <div className="flex flex-wrap justify-between items-center mb-5">
          <p className="text-gray-500 text-sm">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Lucknow, based on trends
          </p>
          <Link to="/" className="flex items-center text-xs gap-1 text-red-500">
            All collection in Lucknow
            <span className="mt-1">
              <AiFillCaretRight />
            </span>
          </Link>
        </div>
        <div className="px-8 md:px-0">
          <ProductSlider Data={Data} collection={true} />
        </div>
      </div>
    </div>
  );
}

export default Collection;
