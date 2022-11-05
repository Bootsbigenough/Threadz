import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Pants from '../../pages/Pants/Pants';
import Shirts from '../../pages/Shirt/Shirt';
import Shoes from '../../pages/Shoes/Shoes';
import logo from "../../../images/THREADZ.png";
import "../../../styles/NavTabs.css";

const navbarData = [

      {
        id: 1,
        title: "Tops",
        to: "/shirts",
      },
      {
        id: 2,
        title: "Bottoms",
        to: "/pants",
      },
      {
        id: 3,
        title: "Shoes",
        to: "/shoes",
      },
]

const styles = {
  navbarStyle: {
    height: "6em",
    width: "100%",
    background: "whitesmoke",
    justifyContent: "space-around",
    fontSize: "1.5em",
    marginLeft: "0em",
    marginRight: "0%",
    marginTop: "0%",
  },
};

const Navbar = () => {
    return (
      <Router>
        <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded"
        style={styles.navbarStyle} id="nav nav-tabs">
          <ul className="flex flex-wrap">

          <img
          src={logo}
          width="200"
          height="200"
          className=""
          alt="threadzlogo"
        />
        <div className='Links' marginLeft="1em" >
            {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
            ))}
      </div>
            <div className="Btnbar">
          <button class="Btn">login</button>
          <button class="Btn">cart 0 items</button>
          <div class="input-box">
            <input className="search" type="text" placeholder="Search..." />
            <span className="search"></span>
            <button class="Btn">Search</button>
          </div>
        </div>
          </ul>
        </nav>
  
        <Switch>
        <Route exact path="/">
          <Shirts/>
        </Route>
          <Route path="/shirts">
            <Shirts/>
          </Route>
          <Route path="/pants">
            <Pants/>
            </Route>
          <Route path="/Shoes">
            <Shoes/>
          </Route>
         </Switch>
      </Router>
    );
  };
  
  const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
      <li className="m-3 lg:mx-5">
        <NavLink to={to} activeClassName="text-blue-600" className="text-grey-500 pl-1 hover:text-blue-300 transition ease-out duration-200">{title}</NavLink>
      </li>
    );
  };
  
  export default Navbar;