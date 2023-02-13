import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeIndex from './routes/Home/HomeIndex';
import Promotion from './routes/Home/Promotion';
import Subscription from './routes/Home/Subscription';
import SubscriptionIndex from './routes/Home/Subscription/SubscriptionIndex';
import SubscriptionMessage from './routes/Home/Subscription/SubscriptionMesage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path="promotion" element={<Promotion />}/>
          <Route path="subscription" element={<Subscription />}>
            <Route index element={<SubscriptionIndex />} />
            <Route path="confirmation" element={<SubscriptionMessage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
