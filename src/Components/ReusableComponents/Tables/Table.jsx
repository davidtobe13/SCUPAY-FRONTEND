import React from "react";
import "./Table.css";

const Table = () => {
  const data = [
    {
      transactionId: "2025841-WAP",
      studentId: "G3286",
      name: "Amira Yusuf",
      feeType: "Tuition",
      amountPaid: "265,800",
      date: "23-06-2024",
      paymentType: "Full payment",
    },
    {
      transactionId: "2025841-WEB",
      studentId: "G3286",
      name: "Nkechi Joseph",
      feeType: "PTA",
      amountPaid: "265,800",
      date: "23-06-2024",
      paymentType: "Part payment",
    },
    {
      transactionId: "2025841-WEB",
      studentId: "G3286",
      name: "Nkechi Joseph",
      feeType: "PTA",
      amountPaid: "265,800",
      date: "23-06-2024",
      paymentType: "Part payment",
    },
    {
        transactionId: "2025841-WAP",
        studentId: "G3286",
        name: "Amira Yusuf",
        feeType: "Tuition",
        amountPaid: "265,800",
        date: "23-06-2024",
        paymentType: "Full payment",
      },
    {
      transactionId: "2025841-WEB",
      studentId: "G3286",
      name: "Nkechi Joseph",
      feeType: "PTA",
      amountPaid: "265,800",
      date: "23-06-2024",
      paymentType: "Part payment",
    },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-cell">Transaction ID</div>
        <div className="table-cell">Student ID</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Fee Type</div>
        <div className="table-cell">Amount Paid</div>
        <div className="table-cell">Date</div>
        <div className="table-cell">Payment Type</div>
        <div className="table-cell-btn">Actions</div>
      </div>
      {data.map((item, index) => (
        <div className="table-row" key={index}>
          <div className="table-cell">{item.transactionId}</div>
          <div className="table-cell">{item.studentId}</div>
          <div className="table-cell">{item.name}</div>
          <div className="table-cell">{item.feeType}</div>
          <div className="table-cell">{item.amountPaid}</div>
          <div className="table-cell">{item.date}</div>
          <div
            className={`table-cell ${
              item.paymentType === "Full payment" ? "full-payment" : "part-payment"
            }`}
          >
            {item.paymentType}
          </div>
          <div className="table-cell-btn2">
            <button className="action-button">Print Invoice</button>
            <button className="action-button">Download Receipt</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
