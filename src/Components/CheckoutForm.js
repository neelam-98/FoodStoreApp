import React from "react";
import { ElementsConsumer, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./CardSection";
import "../css/App.css";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

   const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };
    return (
      <div>
        
        <form onSubmit={handleSubmit}>
            <div className="cardsection">
                <CardSection />
                <br/>
                <button disabled={!stripe} className="btn-pay" >
                    Make Payment
                </button>
          </div>
        </form>
      </div>
    );
  
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}