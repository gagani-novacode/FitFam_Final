'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { StoreProvider, useStore } from '@/context/StoreContext';
import { Navbar } from '@/components/layout/Navbar';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <div className={isHome ? '' : 'pt-16'}>
      {children}
    </div>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {
    cartItems,
    wishlistItems,
    removeFromCart,
    updateCartQuantity,
    removeFromWishlist,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
  } = useStore();

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onRemoveFromCart={removeFromCart}
        onUpdateCartQuantity={updateCartQuantity}
        onRemoveFromWishlist={removeFromWishlist}
        onSearchQueryChange={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenCheckout={() => router.push('/checkout')}
      />
      <PageWrapper>
        {children}
      </PageWrapper>
    </div>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <LayoutContent>{children}</LayoutContent>
    </StoreProvider>
  );
}