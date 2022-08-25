import { Link } from "react-router-dom";

function CollectionProduct({ item }) {
  return (
    <Link to="/" className="flex justify-center gap-5">
      <figure className="w-100 md:w-60 lg:w-72 relative before:absolute before:w-full before:h-full  before:bg-black/30  rounded-md overflow-hidden">
        <img
          src={item?.cover}
          alt={item?.title}
          className="w-full h-80 lg:h-96 object-cover"
        />
        <figcaption className="absolute bottom-2 flex flex-col text-gray-50 pl-2 font-semibold">
          <span className="truncate">{item?.title}</span>
          <span>{item?.places}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default CollectionProduct;
