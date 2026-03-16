export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-slate-900 text-slate-200 p-6 hidden md:block">
      <h2 className="text-lg font-bold mb-8">MyBilling</h2>

      <nav className="space-y-2 text-sm">
        <NavItem label="Dashboard" onClick={() => setPage("dashboard")} />
        <NavItem label="Create Invoice" onClick={() => setPage("createInvoice")} />
        <NavItem label="Invoices" onClick={() => setPage("invoices")} />
        <NavItem label="Products" onClick={() => setPage("products")} />
        <NavItem label="Customers" onClick={() => setPage("customers")} />
        <NavItem label="Inventory" onClick={() => setPage("inventory")} />
      </nav>
    </div>
  );
}

function NavItem({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
    >
      {label}
    </div>
  );
}
