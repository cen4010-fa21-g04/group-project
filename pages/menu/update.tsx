import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import { MenuService } from '@/services/MenuService';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = (item) => {
    setCurrentItem(item);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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

  const handleItemDelete = async () => {
    handleDialogClose();
    const response = await menuService.deleteItem(currentItem.mid);
    const updatedItems = items.filter((item) => item.id !== currentItem.id);
    setItems(updatedItems);
  };

  const createItemHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      price: { value: number };
    };

    const payload = {
      name: target.name.value,
      price: target.price.value,
    };

    const response = await menuService.createItem(payload);

    const newItem = response.body.item;

    const updatedItems = [...items, newItem];

    setItems(updatedItems);
  };

  return (
    <main className="layout_container">
      <Header title="OnlyTable | Menu" />
      <AdminNavbar />

      <div className="menu">
        <table className="menu_table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th></th>
            </tr>
            {items &&
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price / 100}</td>
                  <td>
                    <button onClick={() => handleDialogOpen(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <form className = "uouterform" onSubmit={createItemHandler}>
          <p className = "ucreatenew">Create New Menu Item</p>
          
          <br></br>
          <input className = "ufirstform"
            name="name" 
            type="text" 
            placeholder="Item Name" 
          />

          <input className = "usecondform"
            name="price"
            type="number"
            placeholder="Item Price (IN DECIMAL)"
          />
          <button className = "ubutton" type="submit"><b>Create</b></button>
          
          <p className = "ucreatenew">Create New Menu Item</p>
          
          <br></br>
          <input className = "ufirstform"
            name="namedelete" 
            type="text" 
            placeholder="Item Name" 
          />
          <button className = "ubuttondelete" type="submit"><b>Delete</b></button>
        </form>

      </div>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item added to cart!
        </Alert>
      </Snackbar>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete this menu item?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            There is no going back
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleItemDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <AdminFooter />
    </main>
  );
}
