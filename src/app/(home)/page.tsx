import getProducts from "../actions/getProducts";
import React from "react";
import { IProductsParams } from "../actions/getProducts";

import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/Container";
import Categories from "@/components/categories/Categories";
import EmptyState from "@/components/EmptyState";
import FloatingButton from "@/components/FloatingButton";
import ProductCard from "@/components/products/ProductCard";
import Pagination from "@/components/Pagination";
import { PRODUCTS_PER_PAGE } from "@/constants";

interface HomeProps {
  searchParams: IProductsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  const page = searchParams?.page;

  console.log(page, "22");
  const pageNum = typeof page === "string" ? Number(page) : 1;

  return (
    <Container>
      <Categories />
      {products?.data.length === 0 ? (
        <EmptyState showReset />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {products?.data.map((product) => (
              <ProductCard
                currentUser={currentUser}
                key={product.id}
                data={product}
              />
            ))}
          </div>

          <Pagination
            page={pageNum}
            totalItems={products.totalItems}
            perPage={PRODUCTS_PER_PAGE}
          />

          <FloatingButton href="/products/upload">+</FloatingButton>
        </>
      )}
    </Container>
  );
};

export default Home;
