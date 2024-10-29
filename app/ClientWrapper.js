// app/ClientWrapper.js
"use client";

import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Updated path to point to app/theme.js

export default function ClientWrapper({ children }) {
  return (
    <ClerkProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
