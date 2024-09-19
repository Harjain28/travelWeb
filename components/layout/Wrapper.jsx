"use client";

import React, { useEffect } from "react";
import Aos from "aos";

export default function Wrapper({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 200,
      once: true,
    });
  }, []);
  return <>{children}</>;
}
