"use client";

import { MoviesNotFounded } from "@/components/MoviesNotFounded";
import { ProductCartCard } from "@/components/ProductCartCard";
import { SuccessPurchase } from "@/components/SuccessPurchase";

import { useCartContainer } from "@/hooks/cart";

export const CartContainer = () => {
  const {
    filteredProducts,
    handleAddProduct,
    handleRemoveProcuct,
    products,
    onLabelClick,
    handlePurchase,
    step,
    handleBackToCart,
  } = useCartContainer();
  
  if (step === "successPurchase") {
    return <SuccessPurchase onLabelClick={handleBackToCart} label="Voltar" />;
  }
  if (!products.length) {
    return <MoviesNotFounded onLabelClick={onLabelClick} label={"Voltar"} />;
  }

  return filteredProducts?.map((currentProduct, index) => {
    const productsAtCart = products.filter((p) => p.id === currentProduct.id);
    const productQuantity = productsAtCart?.length;

    const subTotal = productsAtCart.reduce((previousState, current) => {
      return (previousState += current.price);
    }, 0);

    return (
      <ProductCartCard
        {...currentProduct}
        productQuantity={productQuantity}
        subTotal={subTotal}
        key={index}
        handleAddProduct={() => handleAddProduct(currentProduct)}
        handleRemoveProcuct={() => handleRemoveProcuct(currentProduct)}
        handlePurchase={() => handlePurchase(currentProduct)}
      />
    );
  });
};
