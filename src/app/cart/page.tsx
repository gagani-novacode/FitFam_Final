'use client';

import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { CartPage } from '@/views/CartPage';

export default function Page() {
  const router = useRouter();
  const {
    cartItems,
    removeFromCart,
    updateCartQuantity,
  } = useStore();

  return (
    <CartPage
      cartItems={cartItems}
      onRemoveFromCart={removeFromCart}
      onUpdateQuantity={updateCartQuantity}
      onOpenCheckout={() => router.push('/checkout')}
    />
  );
}