export const fetchData = async (start, end, timezone) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "SHIELD", date: start, amount: "$120", status: "Paid" },
        { name: "SUDHAKAR", date: end, amount: "$190", status: "Pending" },
        { name: "Calender", date: end, amount: "$70", status: "Adjusted" },
        { name: "Shieldtask", date: end, amount: "$120", status: "paid" },
        { name: "Mayuri", date: start, amount: "$86", status: "Adjusted" },
      ]);
    }, 500);
  });
};
