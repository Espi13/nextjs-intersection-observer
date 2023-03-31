import ProductModel from "@/models/Product.model";
import { Grid } from "@mui/material";
import { FC } from "react";
import ProductItem from "./ProductItem";

const ProductList: FC<{ products: ProductModel[] }> = ({ products }) => {
  console.log("Valor de products: ", products);
  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ marginTop: 4 }}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          discount={product.discount}
          category={product.category}
          quantity={product.quantity}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
