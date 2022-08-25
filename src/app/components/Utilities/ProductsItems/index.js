import { Link } from "react-router-dom";
function ProductsItems({ items }) {
  return (
    <Link
      to={items?.title}
      className="block mx-2 rounded-lg hover:shadow-lg hover:bg-gray-50 transition-all p-2"
    >
      <img
        src={items?.cover}
        alt={items?.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-gray-700 text-lg font-semibold text-clip pt-2">
        {items?.title}
      </p>
    </Link>
  );
}

export default ProductsItems;
