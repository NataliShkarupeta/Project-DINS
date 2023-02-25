 import { Link, Outlet } from "react-router-dom"
 import { Header } from "components/Header/Header";
 export const Layout =()=>{
    return (
      <>
        <Header />
        <ul>
          <li>
            <Link to="/home">Головна</Link>
          </li>
          <li>
            <Link to="/portfolio"> Приклади робіт</Link>
          </li>
          <li>
            <Link to="/diary">Щоденник</Link>
          </li>
          <li>
            <Link to="/book">Книга</Link>
          </li>
        </ul>
        <Outlet/>
      </>
    );
 }