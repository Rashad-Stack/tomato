import { Route, Routes } from "react-router-dom";
import { Hero } from "./app/components/Base";
import { Layout } from "./app/components/Utilities";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Hero />} />
      </Routes>
    </Layout>
  );
}

export default App;
