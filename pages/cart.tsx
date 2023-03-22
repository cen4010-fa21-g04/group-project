import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';

export default function Cart() {
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
  return (
    <main className="layout_container">
      <Header title="OnlyTable | Cart" />
      <Navbar />
      <div className="cart">
        <div className="cart_list">
          <p>Items</p>
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          <p>Total: $</p>
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
