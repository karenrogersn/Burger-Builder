import React from 'react';

//importing high order component Aux to wrap Layout and have adjacent jsx elements
import Aux from './../../hoc/Aux';

import classes from './Laytout.module.css';

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideBar, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
