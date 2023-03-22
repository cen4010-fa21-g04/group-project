import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';

//unit_amount is price in decimal form
const items = [
  { label: 'Cheeseburger', unit_amount: 1000 },
  { label: 'Pizza', unit_amount: 1200 },
  { label: 'Chicken Salad', unit_amount: 900 },
  { label: 'Shrimp Tacos', unit_amount: 1300 },
  { label: 'Soup of the Day', unit_amount: 500 },
  { label: 'Pasta', unit_amount: 800 },
];

export default function Menu() {
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
            {items.map((item) => (
              <tr key={`table-row-${item.label}`}>
                <td>{item.label}</td>
                <td>${item.unit_amount / 100}</td>
                <td>
                  <button> Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer href="login" title="Employee / Restaurant View" />
    </main>
  );
}
