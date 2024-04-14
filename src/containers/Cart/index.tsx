import { ProductCartCard } from "@/components/ProductCartCard";

export const CartContainer = () => {
  return (
    <ProductCartCard
      price={29.99}
      productQuantity={1}
      subTotal={29.99}
      title={"Homem Aranha"}
    />
  );
};
