function Filter({ Data }) {
  return (
    <div className="flex flex-wrap gap-3 py-5 px-2">
      {Data?.length &&
        Data.map((data) => (
          <button
            className="flex items-center gap-1 p-2 border rounded-md text-gray-500 text-sm"
            key={data?.id}
          >
            {data !== null && data?.icon}
            {data.title}
          </button>
        ))}
    </div>
  );
}

export default Filter;
