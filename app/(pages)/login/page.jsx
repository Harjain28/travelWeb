import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header1 from "@/components/layout/header/Header1";
import Login from "@/components/pages/Login";
import React from "react";

export const metadata = {
  title: "Login || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
      <div className="background_header"></div>
        <Header1 />
        <Login />
        <FooterSeven />
      </main>
    </>
  );
}
