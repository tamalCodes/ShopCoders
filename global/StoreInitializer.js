"use client";

import { useRef } from "react";
import { useStore } from "./store";

function StoreInitializer({ cartArray }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ cartArray });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
