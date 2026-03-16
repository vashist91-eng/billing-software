import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateInvoice from "./pages/CreateInvoice";
import Invoices from "./pages/Invoices";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return <Login onLogin={() => setPage("dashboard")} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar setPage={setPage} />

      <main className="flex-1 p-8">
        {page === "dashboard" && <Dashboard />}
        {page === "createInvoice" && <CreateInvoice />}
        {page === "invoices" && <Invoices />}
        {page === "products" && <Products />}
        {page === "customers" && <Customers />}
        {page === "inventory" && <Inventory />}
      </main>
    </div>
  );
}
