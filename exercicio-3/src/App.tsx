import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import Promotion from "./routes/Home/Promotion";
import Subscription from "./routes/Home/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home"/>} />
          <Route path="/home" element={<HomeIndex />} />
          <Route path="/promotion" element={<Promotion />}/>
          <Route path="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

