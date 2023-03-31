import ProductModel from "@/models/Product.model";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import { FC } from "react";

const ProductItem: FC<ProductModel> = ({
  id,
  name,
  price,
  image,
  description,
  discount,
  category,
  quantity,
}) => {
  return (
    <Grid
      item
      xs={2}
      md={6}
      lg={3}
      sx={{
        cursor: "pointer",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Card>
        <CardMedia>
          <Image src={image} alt={name} width={300} height={300} />
        </CardMedia>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            mb={4}
            component="div"
          >
            {name}
          </Typography>
          {!discount && (
            <Box sx={{ height: "50px" }}>
              <Typography variant="body1">{price} €</Typography>
            </Box>
          )}

          {discount && (
            <Box
              sx={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
              }}
            >
              <Typography
                variant="body1"
                sx={{ textDecoration: "line-through" }}
              >
                {price} €
              </Typography>
              <Typography variant="body1" sx={{ color: red[500] }}>
                {((price * (100 - discount)) / 100).toFixed(2)} € (-{discount}%)
              </Typography>
            </Box>
          )}
          <Box>
            <Typography variant="body2" sx={{ color: "grey" }}>
              {description}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", marginBottom: 4 }}>
          <Button size="small" color="primary" variant="contained">
            AÑADIR
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
