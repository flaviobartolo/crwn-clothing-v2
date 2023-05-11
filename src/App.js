import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <div>Shop Component</div>;
};

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />{" "}
      {/* index or index={true} means that its your default component for the path above  */}
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;
