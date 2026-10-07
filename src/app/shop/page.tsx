'use client';

import { useStore } from '@/context/StoreContext';
import { ShopPage } from '@/views/ShopPage';

export default function Page() {
  const {
    products,
    isLoadingProducts,
    addToCart,
    toggleWishlist,
    wishlistItems,
  } = useStore();

  return (
    <ShopPage
      products={products}
      isLoading={isLoadingProducts}
      onAddToCart={addToCart}
      onToggleWishlist={toggleWishlist}
      wishlistItems={wishlistItems}
    />
  );
}