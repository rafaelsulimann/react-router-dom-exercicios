import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeIndex from './routes/Home/HomeIndex';
import Promotion from './routes/Home/Promotion';
import Subscription from './routes/Subscription';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path="promotion" element={<Promotion />} />
        </Route>
        <Route path="subscription" element={<Subscription />}/>
      </Routes>
    </BrowserRouter>
  );
}

