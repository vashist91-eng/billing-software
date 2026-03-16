export default function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="text-xl font-bold text-slate-900 mt-1">{value}</h2>
    </div>
  );
}
