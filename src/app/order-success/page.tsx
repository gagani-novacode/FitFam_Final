'use client';

import React, { Suspense } from 'react';
import { OrderSuccessPage } from '@/views/OrderSuccessPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <OrderSuccessPage />
    </Suspense>
  );
}
