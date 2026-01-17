import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Paper, Box, ImageList, ImageListItem } from '@mui/material';

function ProductDisplay({ product }) {
  const getVariationValue = (code) => {
    const variation = product.variations.find(v => v.code === code);
    return variation ? (variation.valueLabel || variation.value) : 'N/A';
  };

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={product.photo?.url || 'https://via.placeholder.com/300'}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {new Intl.NumberFormat('uz-UZ').format(product.price)} {product.priceUnit?.symbol}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.address}, {product.region?.name}, {product.region?.parent?.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">Details</Typography>
          <Box sx={{ mt: 2 }}>
            <p><strong>Category:</strong> {product.category?.name}</p>
            <p><strong>Building Type:</strong> {getVariationValue('type_of_building')}</p>
            <p><strong>Repair Status:</strong> {getVariationValue('repair_status')}</p>
            <p><strong>Total Area:</strong> {getVariationValue('area_all')} m²</p>
            <p><strong>Living Area:</strong> {getVariationValue('area_effective')} m²</p>
            <p><strong>Floors:</strong> {getVariationValue('floors_building')}</p>
            <p><strong>Created Date:</strong> {product.createdDate}</p>
            <p><strong>Last Updated:</strong> {product.updatedDate}</p>
          </Box>
        </Grid>
      </Grid>
      {product.productOrder?.photos && product.productOrder.photos.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">More Photos</Typography>
          <ImageList sx={{ width: '100%' }} cols={3} rowHeight={164}>
            {product.productOrder.photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}
    </Paper>
  );
}

export default ProductDisplay;
