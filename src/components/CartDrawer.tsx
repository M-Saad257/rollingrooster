'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { RESTAURANT_INFO } from '@/data/menuData';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    isCartOpen,
    closeCart,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isCartOpen) return null;

  const deliveryFee = subtotal >= RESTAURANT_INFO.freeDeliveryThreshold || subtotal === 0 ? 0 : RESTAURANT_INFO.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    if (!customerName || !customerPhone || !deliveryAddress) {
      alert('Please provide your Name, Phone Number, and Delivery Address to place your order.');
      return;
    }

    // Build WhatsApp Order Receipt
    let msg = `*NEW ORDER: The Rolling Rooster*
--------------------------------------
*Customer:* ${customerName}
*Phone:* ${customerPhone}
*Address:* ${deliveryAddress}
--------------------------------------
*ORDER ITEMS:*
`;

    items.forEach((ci, index) => {
      msg += `\n${index + 1}. *${ci.quantity}x ${ci.item.name}* — Rs ${ci.totalItemPrice * ci.quantity}`;
    });

    msg += `\n\n--------------------------------------
Subtotal: Rs ${subtotal}
Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `Rs ${deliveryFee}`}
*Grand Total:* *Rs ${grandTotal}*
--------------------------------------`;

    if (orderNotes) {
      msg += `\n*Special Notes:* ${orderNotes}\n--------------------------------------`;
    }

    msg += `\n_Please confirm my order and send estimated delivery time. Cash on delivery._`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <aside
          aria-label="Order Bag"
          className="w-screen max-w-sm bg-white border-l border-gray-100 shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#E64A19]" />
              <h3 className="font-bold text-sm text-gray-900 uppercase">
                Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-1 rounded-md text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-10 h-10 text-gray-300 mx-auto" />
                <h4 className="font-bold text-sm text-gray-800">Your bag is empty</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Add some tasty broast, burgers, or pizza deals to your order!
                </p>
                <button
                  onClick={closeCart}
                  className="px-4 py-2 rounded-full bg-[#E64A19] text-white text-xs font-semibold"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((ci) => (
                    <div
                      key={ci.cartId}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex gap-3 items-center justify-between"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shrink-0">
                        <Image
                          src={ci.item.image}
                          alt={ci.item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="flex-1 min-w-0 pr-1">
                        <h5 className="text-xs font-bold text-gray-900 truncate">
                          {ci.item.name}
                        </h5>
                        <div className="text-xs font-semibold text-[#E64A19]">
                          Rs {ci.totalItemPrice.toLocaleString()}
                        </div>

                        {/* Controls */}
                        <div className="mt-2 flex items-center gap-1.5">
                          <button
                            onClick={() => updateQuantity(ci.cartId, ci.quantity - 1)}
                            className="w-5 h-5 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-gray-900 px-1.5">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(ci.cartId, ci.quantity + 1)}
                            className="w-5 h-5 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(ci.cartId)}
                        className="text-gray-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={clearCart}
                    className="text-[11px] text-gray-400 hover:text-red-600 flex items-center gap-1 pt-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear Bag
                  </button>
                </div>

                {/* Checkout form */}
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-2.5 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-900 block">
                    Delivery Information (Islamabad)
                  </span>

                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 outline-none focus:border-[#E64A19]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 outline-none focus:border-[#E64A19]"
                  />

                  <textarea
                    required
                    rows={2}
                    placeholder="Delivery Address (Sector, Street, House #) *"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 outline-none focus:border-[#E64A19] resize-none"
                  />

                  <input
                    type="text"
                    placeholder="Special Instructions (Optional)"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 outline-none focus:border-[#E64A19]"
                  />
                </form>
              </>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">Rs {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-gray-900">
                    {deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : `Rs ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-1.5 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-base text-[#E64A19]">Rs {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA59] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp (COD)</span>
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
