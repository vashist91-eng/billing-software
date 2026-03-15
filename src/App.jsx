import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./layout/AppLayout";

export default function BillingApp() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return <LoginPage onLogin={() => setPage("dashboard")} />;
  }

  return <AppLayout page={page} setPage={setPage} />;
}
