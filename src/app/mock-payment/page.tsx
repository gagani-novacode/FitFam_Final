'use client';

import React, { Suspense } from 'react';
import { MockPaymentPage } from '@/views/MockPaymentPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <MockPaymentPage />
    </Suspense>
  );
}
