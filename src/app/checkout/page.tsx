'use client';

import { useStore } from '@/context/StoreContext';
import { CheckoutPage } from '@/views/CheckoutPage';

export default function Page() {
  const { cartItems, clearCart } = useStore();

  return (
    <CheckoutPage
      cartItems={cartItems}
      onClearCart={clearCart}
    />
  );
}