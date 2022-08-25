import { diningData } from "../../../data";
import { Collection, ExploreProducts, Filter } from "../../Utilities";
function DiningOut() {
  return (
    <>
      <Collection Data={diningData?.collectionList} />
      <div className="container mx-auto px-2">
        <Filter Data={diningData?.diningFilter} />
      </div>
      <ExploreProducts
        Data={diningData?.dining}
        title="Dine-Out Restaurants in Lucknow"
      />
    </>
  );
}

export default DiningOut;
