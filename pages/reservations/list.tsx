import AdminNavbar from '@/components/admin-navbar';
import AdminFooter from '@/components/admin/footer';
import Header from '@/components/head';
import { MenuService } from '@/services/MenuService';
import { useEffect, useState } from 'react';

const menuService = new MenuService();

export default function ReservationsList() {
  const [items, setItems] = useState(null);

  const loadRoute = async () => {
    const response = await menuService.fetchAllMenus();
    setItems(response.body.menu);
  };

  useEffect(() => {
    loadRoute();
  }, []);

  return (
    <main className="layout_container">
      <Header title="OnlyTable | Orders" />
      <AdminNavbar />

      {/* <div className="menu">
        <table className="menu_table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
            {items &&
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price / 100}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}

      <AdminFooter />
    </main>
  );
}
