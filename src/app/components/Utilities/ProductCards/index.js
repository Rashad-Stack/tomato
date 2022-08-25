import { AiFillStar } from "react-icons/ai";
function ProductCards({ item }) {
  const name = item?.info?.name ?? "";
  const image = item?.info?.image?.url;
  const deliveryTime = item?.order?.deliveryTime;
  const rating_text = item?.info?.rating?.rating_text ?? "";
  const price = item?.info?.cfo?.text;
  const offer = item?.bulkOffers ?? [];
  const cuisine = item?.info?.cuisine?.map((it) => it.name).slice(0, 3);
  const bottomContainer = item?.bottomContainers;
  const goldOff = item?.gold?.text;
  const proOff = offer?.length > 1 ? offer[0]?.text : null;
  const discount =
    offer?.length > 1
      ? offer[1]?.text
      : offer?.length === 1
      ? offer[0]?.text
      : null;

  return (
    <div className="w-60 mx-2 rounded-lg hover:shadow-md bg-white transition-all p-2">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="w-full absolute bottom-2">
          {proOff && (
            <p className="inline-block bg-red-700 text-xs text-gray-50 p-1">
              {proOff}
            </p>
          )}
          {goldOff && (
            <p className="inline-block bg-red-700 text-xs text-gray-50 p-1">
              {goldOff}
            </p>
          )}

          <span className="w-full flex justify-between  mt-1 pr-1">
            {discount && (
              <p className="block bg-blue-700 text-xs text-gray-50 p-1">
                {discount}
              </p>
            )}

            <p className="block bg-gray-100 text-xs font-medium text-gray-700 rounded-sm p-1 ml-auto">
              {deliveryTime}
            </p>
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="w-40 text-gray-700 text-md font-semibold pt-2 truncate">
          {name}
        </p>
        {rating_text && (
          <p className="inline-flex items-center bg-green-700 text-gray-50 text-xs font-medium px-2 mt-2 rounded-md">
            {rating_text} <AiFillStar />
          </p>
        )}
      </div>
      <span className="flex justify-between mt-2 border-b pb-1">
        {cuisine.length && (
          <span className="w-32 truncate text-sm text-gray-500">
            {cuisine?.map((c, i) => (
              <span key={i}>
                {c} {i !== cuisine.length - 1 && ","}
              </span>
            ))}
          </span>
        )}
        <span className="text-sm text-gray-500">{price}</span>
      </span>
      <div className="flex items-center gap-2 p-1">
        <div className="w-5">
          <img
            src={bottomContainer[0]?.image?.url}
            alt={bottomContainer[0]?.text}
          />
        </div>
        <p className="w-32 truncate text-sm text-gray-500">
          {bottomContainer[0]?.text}
        </p>
      </div>
    </div>
  );
}

export default ProductCards;
