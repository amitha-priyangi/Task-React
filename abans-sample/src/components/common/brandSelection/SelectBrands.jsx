import React, { useState } from "react";
import styles from "./SelectBrands.module.scss";
import { Link } from "react-router-dom";
import { brandOptions } from "../../../data/data.js";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const SelectBrands = () => {
  const [brandVisible, setBrandVisible] = useState(false);

  const handleToggleVisibility = () => {
    setBrandVisible(!brandVisible);
  };

  return (
    <div>
      <div
        className={`${styles.logoFlexDiv} ${
          brandVisible ? styles.colsHidden : ""
        }`}
        onClick={handleToggleVisibility}
      >
        <Button variant="contained">Select a Brand</Button>
      </div>

      {brandVisible && (
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {brandOptions.map((brand) => (
              <Grid item xs={6}>
                <Link to={`/${brand.link}`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles.image}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default SelectBrands;
