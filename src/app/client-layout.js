'use client';

import { useEffect } from 'react';
import { initScrollReveals } from './scroll';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveals();
  }, []);

  return children;
} 