import { Route, Routes } from "react-router-dom";
import { Notfound404Page } from "../../Base";
import { DeliveryProducts, DiningOut, NightLife } from "../../Utilities";

function Products() {
  return (
    <Routes>
      <Route path="/delivery" element={<DeliveryProducts />} />
      <Route path="/diningout" element={<DiningOut />} />
      <Route path="/nightlife" element={<NightLife />} />
      <Route path="*" element={<Notfound404Page />} />
    </Routes>
  );
}

export default Products;
