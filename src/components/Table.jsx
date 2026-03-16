export default function Table({ headers, rows }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <table className="w-full text-sm">
        <thead className="text-slate-500">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left pb-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, j) => (
                <td key={j} className="py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
