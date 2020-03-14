import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const GuestNav = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  return (
    <div style={{display: 'none'}}>
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
      <ul className="list-reset">
            <li>
            <a href="/" className="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Home</a>
            </li>
            <li>
            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Population</a>
            </li>
            <li>
            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Taux de chomage</a>
            </li>
            <li>
            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Prevalence du HIV</a>
            </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default GuestNav;
