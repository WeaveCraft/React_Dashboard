import "./widget.scss"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';


import React from 'react'

const widget = ({ type }) => {
  let data;

  //temporary
  const amount = 185;
  const diff = 25;

  switch (type) {
    case "expenses":
      data = {
        title: "Expenses",
        isMoney: true,
        link: "See all Expenses",
        icon: <RemoveCircleOutlineIcon className="icon" 
        style={{
          color:"crimson", 
          backgroundColor: "lightblue",
      }}/>
      };
      break;
    case "incomes":
      data = {
        title: "Incomes",
        isMoney: true,
        link: "See all Incomes",
        icon: <AddCircleOutlineIcon className="icon" 
        style={{
          color:"green",
          backgroundColor: "lightblue",
        }}/>
      };
      break;
    case "transactions":
      data = {
        title: "Transactions",
        isMoney: false,
        link: "See all Transactions",
        icon: <AccountBalanceOutlinedIcon className="icon"
        style={{
          color:"goldenrod",
          backgroundColor: "lightblue",
        }} />
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See total Balance",
        icon: <BalanceOutlinedIcon className="icon" 
        style={{
          color:"black",
          backgroundColor: "lightblue",
        }}/>
      };
      break;
    case "savings":
      data = {
        title: "Savings",
        isMoney: true,
        link: "See Savings",
        icon: <SavingsOutlinedIcon className="icon"
        style={{
          color:"purple",
          backgroundColor: "lightblue",
        }}/>
      };
      break;
    default:
      break;
  }



  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default widget;