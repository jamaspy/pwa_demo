// app/register-pwa.tsx
"use client";
import type { Workbox } from "workbox-window";
import React, { useEffect } from "react";
declare global {
  interface Window {
    workbox: Workbox;
  }
}

export function RegisterPWA() {
  useEffect(() => {
    if ("serviceWorker" in navigator && window.workbox !== undefined) {
      const wb = window.workbox;
      wb.register();
    }
  }, []);
  return <></>;
}
