"use client";
import { theme } from "@/styles/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

// app/layout.jsx

export default function StyledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
