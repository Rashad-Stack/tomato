import { nightLifeData } from "../../../data";
import { Collection, ExploreProducts, Filter } from "../../Utilities";
function NightLife() {
  return (
    <>
      <Collection Data={nightLifeData?.collectionList} />
      <div className="container mx-auto">
        <Filter Data={nightLifeData?.nightFilters} />
      </div>
      <ExploreProducts
        Data={nightLifeData?.nightLife}
        title="Nightlife restaurants in Lucknow"
      />
    </>
  );
}

export default NightLife;
