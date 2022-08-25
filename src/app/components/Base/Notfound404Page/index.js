import { Link } from "react-router-dom";

function Notfound404Page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[93vh]">
      <div className="flex items-center">
        <span className="text-8xl text-red-500">4</span>
        <span className="w-32">
          <img src="/assets/404page.png" alt="Not Found" className="w-full" />
        </span>
        <span className="text-8xl text-red-500">4</span>
      </div>
      <h1 className="text-red-500 text-2xl md:text-5xl">Page not found</h1>
      <Link
        to="/"
        className="py-3 px-5 bg-red-500 hover:bg-red-600 text-gray-50 text-xl font-semibold rounded-md transition-all mt-10"
      >
        Goto Home
      </Link>
    </div>
  );
}

export default Notfound404Page;
