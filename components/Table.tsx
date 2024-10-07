import * as React from 'react';

export function Table({ bordered = true, children }) {
  return (
    <div className="table-wrapper">
      <table className={bordered ? 'bordered' : ''}>
        {children}
      </table>
      <style jsx>
        {`
          .table-wrapper {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table.bordered {
            border: 1px solid #dce6e9;
          }
          table.bordered th, 
          table.bordered td {
            border: 1px solid #dce6e9;
            padding: 8px;
          }
          th {
            background-color: #f6f9fc;
          }
          td {
            background-color: #ffffff;
          }
        `}
      </style>
    </div>
  );
}