'use client';

import React, { Suspense } from 'react';
import { useStore } from '@/context/StoreContext';
import { CategoryPage } from '@/views/CategoryPage';

function CategorySubContent() {
  const {
    products,
    isLoadingProducts,
    addToCart,
    toggleWishlist,
    wishlistItems,
  } = useStore();

  return (
    <CategoryPage
      products={products}
      isLoading={isLoadingProducts}
      onAddToCart={addToCart}
      onToggleWishlist={toggleWishlist}
      wishlistItems={wishlistItems}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CategorySubContent />
    </Suspense>
  );
}
