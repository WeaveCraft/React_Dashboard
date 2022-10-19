import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Iphone 14 Pro",
      customer: "Fátima Payés",
      date: "1 March",
      amount: "$1150",
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Anniversary Gift",
      customer: "Viktor Hurtig",
      date: "4 March",
      amount: "$900",
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Netflix Subscription",
      customer: "Viktor Hurtig",
      date: "5 March",
      amount: "$15",
      method: "Cash",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Flight Ticket",
      customer: "Fátima Payés",
      date: "6 March",
      amount: "$780",
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Playstation 5",
      customer: "Viktor Hurtig",
      date: "8 March",
      amount: "$2000",
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Transaction</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
