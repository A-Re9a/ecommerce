import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();


export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        // استرجاع السلة من localStorage إن وُجدت
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    // تحديث localStorage مع كل تعديل في cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // إضافة منتج
    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // إزالة منتج
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // تعديل الكمية
    const updateQuantity = (id, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // حساب الإجمالي
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
