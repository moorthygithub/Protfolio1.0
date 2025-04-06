const YearlyData = ({ data, highlightMonth }) => {
    return (
      <table className="w-full max-w-[900px] border border-black text-center">
        <thead>
          <tr>
            <th className="border border-black p-2">Year</th>
            {data.map((row, index) => (
              <th key={index} className="border border-black p-2">
                {row.month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">2023</td>
            {data.map((row, index) => {
              const isHighlighted = row.month === highlightMonth; // Highlight the passed month
              return (
                <td
                  key={index}
                  className={`border border-black p-2 ${
                    isHighlighted ? "text-red-500 font-bold" : ""
                  }`}
                >
                  {row.y2023}
                </td>
              );
            })}
          </tr>
          <tr>
            <td className="border border-black p-2">2024</td>
            {data.map((row, index) => {
              const isHighlighted = row.month === highlightMonth;
              return (
                <td
                  key={index}
                  className={`border border-black p-2 ${
                    isHighlighted ? "text-red-500 font-bold" : ""
                  }`}
                >
                  {row.y2024}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default YearlyData;
  