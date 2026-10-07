'use client';

import { useStore } from '@/context/StoreContext';
import { ProductDetailPage } from '@/views/ProductDetailPage';

export default function Page() {
  const {
    products,
    addToCart,
    toggleWishlist,
    wishlistItems,
  } = useStore();

  return (
    <ProductDetailPage
      products={products}
      onAddToCart={addToCart}
      onToggleWishlist={toggleWishlist}
      wishlistItems={wishlistItems}
    />
  );
}