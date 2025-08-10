import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 40 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        gap: 2,
      }}
    >
      <CircularProgress 
        size={size} 
        sx={{ 
          color: 'primary.main',
        }} 
      />
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ 
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
