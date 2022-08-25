import {
  deliveryProducts,
  products,
  restaurants,
  topBrands,
} from "../../../data";
import { ExploreProducts, Filter, ProductSlider } from "../../Utilities";

function DeliveryProducts() {
  return (
    <>
      <div className="container mx-auto">
        <Filter Data={products} />
      </div>
      <div className="bg-gray-100 py-5 px-5">
        <div className="container mx-auto px-2">
          <ProductSlider
            title="Eat what makes you happy"
            Data={deliveryProducts}
          />
        </div>
      </div>
      <div className="bg-white py-5 px-5">
        <div className="container mx-auto px-2">
          <ProductSlider title="Top Brands for you" Data={topBrands} />
        </div>
      </div>
      <ExploreProducts Data={restaurants} title="Best food in Lucknow" />
    </>
  );
}

export default DeliveryProducts;
