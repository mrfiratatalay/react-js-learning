import Button from '@mui/material/Button';
import { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

const links = [
  {
    url: '/first',
    name: 'First Page',
  },
  {
    url: '/second',
    name: 'Second Page',
  },
  {
    url: '/third',
    name: 'Third Page',
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = ({ type, key }: { type?: string; key?: string }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Button>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </section>
      <Drawer>
        <div>
          <List>
            <NavLink>
              
            </NavLink>
          </List>
        </div>
      </Drawer>
    </BrowserRouter>
  );
}

export default App;
