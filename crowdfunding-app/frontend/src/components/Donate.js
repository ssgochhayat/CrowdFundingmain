import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import axios from 'axios';

function Donate() {
  const [formData, setFormData] = useState({
    amount: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/donations', formData);
      setStatus('success');
      // Handle successful donation
    } catch (error) {
      setStatus('error');
      console.error('Donation failed:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box py={8} mt={8}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Make a Donation
          </Typography>
          {status === 'success' && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thank you for your donation!
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" sx={{ mb: 2 }}>
              There was an error processing your donation. Please try again.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message (Optional)"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: '#00D1B2',
                '&:hover': {
                  backgroundColor: '#00C4A7',
                },
              }}
            >
              Donate Now
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Donate;