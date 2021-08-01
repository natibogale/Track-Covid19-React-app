import React from "react";
import "./table.css";
function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({country,cases}) => (
        <tr>
          <td className="table__countryColumn">{country}</td>
          <td className="table__casesColumn"> {cases}</td>
        </tr>
      ))}
      
    </div>
  );
}

export default Table;
