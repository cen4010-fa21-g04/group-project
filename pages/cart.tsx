import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';

interface Item {
  itemname: string;
  price: number;
  mid: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Load saved cart items from local storage when component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartTotal(calculateCartTotal(savedCartItems));
      setCartItems(savedCartItems);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    //prevent page from refreshing
    e.preventDefault();

    //format event target
    const target = e.target as typeof e.target & {
      name: { value: string };
      card_exp: { value: string };
      card_name: { value: string };
      card_number: { value: string };
      card_ccv: { value: string };
    };

    //deconstruct target
    const { name, card_exp, card_name, card_number, card_ccv } = target;

    //construct order payload
    const payload = {
      name: name.value,
      card_exp: card_exp.value,
      card_name: card_name.value,
      card_number: card_number.value,
      card_ccv: card_ccv.value,
    };

    //create order
  };

  const removeFromCart = (item) => {
    const updatedCartItems = new Map(cartItems);
    const existingItem = updatedCartItems.get(item) as number;

    if (existingItem) {
      if (existingItem === 1) {
        updatedCartItems.delete(item);
      } else {
        updatedCartItems.set(item, existingItem - 1);
      }

      localStorage.setItem(
        'cartItems',
        JSON.stringify(Array.from(updatedCartItems))
      );

      setCartItems(Array.from(updatedCartItems));

      setCartTotal(calculateCartTotal(Array.from(updatedCartItems)));
    }
  };

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach(([item, quantity]) => {
      total += item.price * quantity;
    });
    return total;
  };

  return (
    <main className="layout_container">
      <Header title="OnlyTable | Cart" />
      <Navbar />
      <div className="cart">
        <div className="cart_list">
          <p>
            <strong>Items</strong>
          </p>
          {cartItems.length ? (
            cartItems.map(([item, quantity]) => (
              <div
                key={item.id}
                style={{ display: 'flex', margin: '.5rem 0', gap: '.5rem' }}
                onClick={() => removeFromCart(item)}
              >
                <p>{item.name}: </p> <p> {quantity}</p>
                <button style={{ background: 'red', borderRadius: 5 }}>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          <div>Total: $ {cartTotal / 100}</div>
          <span>
            <input type="text" name="card_number" placeholder="Card Number" />
            <input
              type="text"
              name="card_exp"
              placeholder="Card Expiration Date"
            />
            <input type="text" name="card_ccv" placeholder="Security Code" />
            <input
              type="text"
              name="card_name"
              placeholder="Card Holder Name"
            />
            <input type="text" name="name" placeholder="Name for the Order" />
            <button style={{ background: 'orange' }} type="submit">
              Submit
            </button>
          </span>
        </form>
      </div>

      <Footer href="login" title="Employee / Restaurant View" />
    </main>
  );
}
