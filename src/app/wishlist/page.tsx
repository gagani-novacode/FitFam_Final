'use client';

import { useStore } from '@/context/StoreContext';
import { WishlistPage } from '@/views/WishlistPage';

export default function Page() {
  const {
    wishlistItems,
    addToCart,
    toggleWishlist,
  } = useStore();

  return (
    <WishlistPage
      wishlistItems={wishlistItems}
      onAddToCart={addToCart}
      onToggleWishlist={toggleWishlist}
    />
  );
}