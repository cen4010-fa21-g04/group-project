import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';
import { MenuService } from '@/services/MenuService';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useState } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const menuService = new MenuService();

interface Item {
  itemname: string;
  price: number;
}

export default function Menu() {
  const [items, setItems] = useState(null);
  const [cartItems, setCartItems] = useState(new Map());
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const loadRoute = async () => {
    const response = await menuService.fetchAllMenus();
    setItems(response.body.menu);
  };

  useEffect(() => {
    loadRoute();
  }, []);

  // Load saved cart items from local storage when component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(new Map(savedCartItems));
    }
  }, []);

  const addToCart = (item) => {
    setOpen(true);
    const updatedCartItems = new Map(cartItems);
    const existingItem = updatedCartItems.get(item);
    updatedCartItems.set(item, existingItem ? existingItem + 1 : 1);
    localStorage.setItem(
      'cartItems',
      JSON.stringify(Array.from(updatedCartItems))
    );
    setCartItems(updatedCartItems);
  };

  return (
    <main className="layout_container">
      <Header title="OnlyTable | Menu" />
      <Navbar />
      <div className="menu">
        <table className="menu_table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
            {items &&
              items.map((item) => (
                <tr key={item.id} onClick={() => addToCart(item)}>
                  <td>{item.name}</td>
                  <td>${item.price / 100}</td>
                  <td>
                    <button> Add</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item added to cart!
        </Alert>
      </Snackbar>

      <Footer href="login" title="Employee / Restaurant View" />
    </main>
  );
}
