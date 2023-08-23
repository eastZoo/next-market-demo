interface IParams {
  productId?: string;
}

const ProductPage = async ({ params }: { params: IParams }) => {
  return <div>ProductPage</div>;
};

export default ProductPage;
