'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/menuData';

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  selectedOptions: Record<string, string>;
  totalItemPrice: number;
}

export interface FlyingItem {
  id: number;
  image: string;
  startX: number;
  startY: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    item: MenuItem,
    quantity?: number,
    selectedOptions?: Record<string, string>,
    extraPrice?: number,
    clickCoords?: { x: number; y: number }
  ) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  toastMessage: { text: string; id: number } | null;
  showToast: (msg: string) => void;
  flyingItems: FlyingItem[];
  isCartBouncing: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; id: number } | null>(null);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [isCartBouncing, setIsCartBouncing] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rolling_rooster_cart');
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rolling_rooster_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage({ text: msg, id: Date.now() });
    setTimeout(() => {
      setToastMessage((current) => (current && Date.now() - current.id >= 2400 ? null : current));
    }, 2500);
  };

  const addItem = (
    item: MenuItem,
    quantity = 1,
    selectedOptions: Record<string, string> = {},
    extraPrice = 0,
    clickCoords?: { x: number; y: number }
  ) => {
    const optionsKey = JSON.stringify(selectedOptions);
    const cartId = `${item.id}-${optionsKey}`;
    const unitPrice = item.price + extraPrice;

    // Trigger fly-to-cart animation if coordinates provided
    if (clickCoords) {
      const flyId = Date.now() + Math.random();
      setFlyingItems((prev) => [
        ...prev,
        {
          id: flyId,
          image: item.image,
          startX: clickCoords.x,
          startY: clickCoords.y,
        },
      ]);

      // Remove after animation finishes and trigger cart bounce
      setTimeout(() => {
        setFlyingItems((prev) => prev.filter((f) => f.id !== flyId));
        setIsCartBouncing(true);
        setTimeout(() => setIsCartBouncing(false), 500);
      }, 650);
    } else {
      setIsCartBouncing(true);
      setTimeout(() => setIsCartBouncing(false), 400);
    }

    setItems((prev) => {
      const existing = prev.find((i) => i.cartId === cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === cartId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          cartId,
          item,
          quantity,
          selectedOptions,
          totalItemPrice: unitPrice,
        },
      ];
    });

    showToast(`Added ${quantity}x ${item.name} to bag.`);
  };

  const removeItem = (cartId: string) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.cartId === cartId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.totalItemPrice * curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen((prev) => !prev),
        toastMessage,
        showToast,
        flyingItems,
        isCartBouncing,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
