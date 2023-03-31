import ProductList from "@/components/ProductList";
import ProductModel from "@/models/Product.model";
import { Container, Grid } from "@mui/material";
import { NextPage } from "next";

interface ProductPageProps {
  products: ProductModel[];
  count: number;
}

const ProductPage: NextPage<ProductPageProps> = ({ products, count }) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid></Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <ProductList products={products} />
    </Container>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page: 1, limit: 8 }),
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const { rows, count } = await response.json();
  return {
    props: {
      products: rows,
      count,
    },
  };
};
