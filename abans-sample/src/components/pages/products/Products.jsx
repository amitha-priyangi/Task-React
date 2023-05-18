import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { productDetails, categoryOptions } from '../../../data/data';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "../../common/itemCard/ItemCard";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Products = () => {
  const { brandId, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter the productDetails array based on the brandId and categoryId parameters
    const filteredProducts = productDetails.filter(
      (product) => product.brand.id === brandId && product.category.id === categoryId
    );
    setProducts(filteredProducts);
  }, [brandId, categoryId]);
  console.log(productDetails)
  return (
    <div>
    <h2>Brand: {brandId}</h2>
    <h2>Category: {categoryId}</h2>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <List>
              {categoryOptions.map((category) => (
                <ListItem disablePadding>
                  <Link
                    key={category.id}
                    to={`/brand/${brandId}/category/${category.id}`}
                  >
                    <ListItemButton>
                      <ListItemText primary={category.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {products.map((product) => (
                  <Grid item xs={2} sm={4} md={4} key={product.id}>
                    <ItemCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
  </div>
  )
}

export default Products