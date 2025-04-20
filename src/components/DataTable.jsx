import React, { useState } from "react";
import { MESSAGES } from "../types/constants";

const DataTable = ({ data }) => {
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const tableHeaders = ["name", "date", "amount", "status"];

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal === bVal) return 0;
    if (sortOrder === "asc") return aVal > bVal ? 1 : -1;
    return aVal < bVal ? 1 : -1;
  });

  return (
    <table className="data-table">
      <thead>
        <tr>
          {tableHeaders.map((key) => (
            <th key={key} onClick={() => handleSort(key)}>
              {key.toUpperCase()}{" "}
              {sortKey === key ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.length === 0 ? (
          <tr>
            <td colSpan="4">{MESSAGES.NO_DATA_FOUND}</td>
          </tr>
        ) : (
          sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
