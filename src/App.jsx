import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './components/Header';
import Search from './components/Search';
import ProductDisplay from './components/ProductDisplay';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('api_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleTokenChange = (newToken) => {
    setToken(newToken);
    localStorage.setItem('api_token', newToken);
  };

  const handleSearch = async (productId) => {
    if (!productId) {
      setError('Please enter a Product ID.');
      return;
    }

    setLoading(true);
    setError('');
    setProduct(null);

    try {
      const response = await axios.get(`/api/public/product/${productId}`);
      setProduct(response.data);
    } catch (err) {
      setError('Failed to fetch product data. Please check the Product ID.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header token={token} onTokenChange={handleTokenChange} />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Information
        </Typography>
        <Search onSearch={handleSearch} loading={loading} />
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        {loading && <Typography sx={{ mt: 2 }}>Loading...</Typography>}
        {product && <ProductDisplay product={product} />}
      </Box>
    </Container>
  );
}

export default App;
