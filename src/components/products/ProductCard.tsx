"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "../HeartButton";
import { TProduct, TUser } from "@/types";
import { fromNow } from "@/helpers/dayjs";

interface ProductCardProps {
  data?: any;
  currentUser?: any | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, currentUser }) => {
  return <div>ProductCard</div>;
};

export default ProductCard;
