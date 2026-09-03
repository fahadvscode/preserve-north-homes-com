import { COMPARISON_ROWS } from "@/lib/content";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="stack-table">
        <caption className="mb-3 text-left text-sm text-text-muted">
          Preserve North versus Preserve West — planning facts that can be stated today.
          Pricing for Preserve North remains to be announced.
        </caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Preserve North</th>
            <th scope="col">Preserve West</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              <td>{row.north}</td>
              <td>{row.west}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
