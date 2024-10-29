// app/ClientHome.js
'use client';

import React from 'react';
import { Button } from '@mui/material';

export default function ClientHome() {
  const handleClick = () => {
    // Handle click event here
    alert('Button clicked');
  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}
