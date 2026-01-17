import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Box } from '@mui/material';

function Header({ token, onTokenChange }) {
  const [currentToken, setCurrentToken] = useState(token);

  const handleSave = () => {
    onTokenChange(currentToken);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Product Finder
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="API Token"
            variant="outlined"
            size="small"
            value={currentToken}
            onChange={(e) => setCurrentToken(e.target.value)}
            sx={{
              marginRight: 1,
              input: { color: 'white' },
              label: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
          <Button color="inherit" onClick={handleSave}>Save</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
