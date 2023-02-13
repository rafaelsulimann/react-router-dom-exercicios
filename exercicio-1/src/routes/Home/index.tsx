import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import HomeIndex from "./HomeIndex";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
