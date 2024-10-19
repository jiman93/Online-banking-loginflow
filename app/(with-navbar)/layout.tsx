"use client";

import Navbar from "../components/navbar/navbar";
import { LoginFlowProvider } from "./context";

export default function withNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <LoginFlowProvider>
        <Navbar />
        {children}
      </LoginFlowProvider>
    </div>
  );
}
