import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';
import { OrderService } from '@/services/OrderService';
import { useEffect, useRef, useState } from 'react';

const orderService = new OrderService();

interface Item {
  name: string;
  price: number;
  quantity?: number;
  id: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<Map<string, Item>>(new Map());
  const [cartTotal, setCartTotal] = useState(0);
  const [feedback, setFeedback] = useState<{
    error?: boolean;
    message: string;
  }>(null);

  //refs
  const cardNumberRef = useRef(null);
  const cardExpRef = useRef(null);
  const cardCvvRef = useRef(null);
  const cardNameRef = useRef(null);

  // Load saved cart items from local storage when component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartTotal(calculateCartTotal(savedCartItems));

      setCartItems(new Map(savedCartItems));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    //prevent page from refreshing
    e.preventDefault();

    //fetch and format cart items
    const items = [];
    Array.from(cartItems).forEach(([id, item]) => {
      items.push(item);
    });

    //construct order payload
    const payload = {
      name: cardNameRef.current.value,
      card_exp: cardExpRef.current.value,
      card_number: cardNumberRef.current.value,
      card_cvv: cardCvvRef.current.value,
      total: cartTotal,
      items,
    };

    //create order
    const { error, body } = await orderService.createOrder(payload);

    //handle exceptions
    if (error) {
      //display error feedback
      setFeedback({ error: true, message: error });
      return;
    }

    //successful order

    //clear inputs
    cardCvvRef.current.value = '';
    cardNumberRef.current.value = '';
    cardExpRef.current.value = '';
    cardNameRef.current.value = '';

    //clear localStorage state
    localStorage.removeItem('cartItems');

    //clear cart total
    setCartTotal(null);

    //clear cart items
    setCartItems(null);

    //display success feedback
    setFeedback({
      message: `Order with id: ${body.order.id} successfully placed!`,
    });
  };

  const removeQuantityFromCart = (itemId: string) => {
    const updatedCartItems = new Map(cartItems);
    const existingItem = updatedCartItems.get(itemId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // decrease the quantity of the item by 1
        existingItem.quantity -= 1;
        updatedCartItems.set(itemId, existingItem);
      } else {
        // remove the item from the cart if the quantity is 1
        updatedCartItems.delete(itemId);
      }

      // update the cartItems state and local storage
      localStorage.setItem(
        'cartItems',
        JSON.stringify(Array.from(updatedCartItems))
      );
      setCartItems(updatedCartItems);
      setCartTotal(calculateCartTotal(Array.from(updatedCartItems)));
    }
  };

  const calculateCartTotal = (items) => {
    let total = 0;
    items.forEach(([id, item]) => {
      total += item.price * item.quantity;
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
          {cartItems &&
            Array.from(cartItems).map(([id, item]) => (
              <div
                key={id}
                style={{ display: 'flex', margin: '.5rem 0', gap: '.5rem' }}
                onClick={() => removeQuantityFromCart(id)}
              >
                <p>{item.name}: </p> <p> {item.quantity}</p>
                <button style={{ background: 'red', borderRadius: 5 }}>
                  Remove
                </button>
              </div>
            ))}
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          <div>Total: $ {cartTotal / 100}</div>
          <span>
            <input
              required
              type="text"
              name="card_number"
              placeholder="Card Number"
              ref={cardNumberRef}
            />
            <input
              required
              type="text"
              name="card_exp"
              placeholder="Card Expiration Date"
              ref={cardExpRef}
            />
            <input
              required
              type="number"
              name="card_cvv"
              placeholder="Security Code"
              ref={cardCvvRef}
            />
            <input
              required
              type="text"
              name="card_name"
              placeholder="Card Holder Name"
              ref={cardNameRef}
            />
            <button style={{ background: 'orange' }} type="submit">
              Submit
            </button>
          </span>
        </form>
        {feedback && (
          <div className="cart_feedback">
            <p style={{ color: feedback.error ? 'red' : 'green' }}>
              {feedback.message}
            </p>
          </div>
        )}
      </div>

      <Footer href="login" title="Employee / Restaurant View" />
    </main>
  );
}
