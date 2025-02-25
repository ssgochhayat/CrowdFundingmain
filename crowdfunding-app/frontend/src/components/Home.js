import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
            color="white"
          >
            <Typography variant="h2" component="h1" gutterBottom>
              ROTARACT IIITM
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom>
              You Bestow, We Deliver
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/donate')}
              sx={{
                mt: 4,
                backgroundColor: '#00D1B2',
                '&:hover': {
                  backgroundColor: '#00C4A7'
                }
              }}
            >
              DONATE NOW
            </Button>
          </Box>
        </Container>
      </div>

      <div className="why-us-section">
        <Container maxWidth="lg">
          <Box py={8}>
            <Typography variant="h3" component="h2" gutterBottom>
              Why us?
            </Typography>
            <Box display="flex" gap={4} flexWrap="wrap">
              <Box flex={1} minWidth={300}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut perspiciatis laborum repellat esse hic nihil a placeat accusamus fugit.
                </Typography>
              </Box>
              <Box flex={1} minWidth={300}>
                <img
                  src="https://sjc.microlink.io/MPNb-rsg6CVHNAwbS2rGqQLnLeufDfoJuRUjwU_sLXrPzRs9RWXh2_HmtK_qNqL_RoFhixjhWSXHuzchaXyZcQ.jpeg"
                  alt="Children smiling"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;