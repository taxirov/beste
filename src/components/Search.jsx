import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';

function Search({ onSearch, loading }) {
  const [productId, setProductId] = useState('');

  const handleSearchClick = () => {
    onSearch(productId);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <TextField
        label="Product ID"
        variant="outlined"
        fullWidth
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        disabled={loading}
      />
      <Button
        variant="contained"
        onClick={handleSearchClick}
        disabled={loading}
        sx={{ ml: 2, height: '56px' }}
      >
        {loading ? <CircularProgress size={24} /> : 'Search'}
      </Button>
    </Box>
  );
}

export default Search;
