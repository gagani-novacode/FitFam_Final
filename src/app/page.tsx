'use client';

import { useStore } from '@/context/StoreContext';
import { HomePage } from '@/views/HomePage';

export default function Page() {
  const {
    products,
    filteredProducts,
    addToCart,
    toggleWishlist,
    wishlistItems,
    activeCategory,
    setActiveCategory,
  } = useStore();

  return (
    <HomePage
      products={products}
      filteredProducts={filteredProducts}
      onAddToCart={addToCart}
      onToggleWishlist={toggleWishlist}
      wishlistItems={wishlistItems}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}