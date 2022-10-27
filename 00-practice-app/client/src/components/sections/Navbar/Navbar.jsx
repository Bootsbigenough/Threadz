import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Pants from '../../pages/Pants/Pants';
import Shirts from '../../pages/Shirt/Shirt';
const navbarData = [

      {
        id: 1,
        title: "Shirts",
        to: "/shirts",
      },
      {
        id: 2,
        title: "Pants",
        to: "/pants",
      },
]

const Navbar = () => {
    return (
      <Router>
        <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
          <ul className="flex flex-wrap">
            {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
            ))}
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