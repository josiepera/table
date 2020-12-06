import React from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import { supplyData } from "./data";



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export const Supply = () => {
  return (
    <>
      <HomePageHeader />
      <div className="supply-container">
        {supplyData.map((data, key) => {
          return (
            <div key={key}>
              <Domain
                key={key}
                name={data.Name}
                category={data.Category}
                interstitial={data.Interstitial}
                premium={data.Premium}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your PSL</h2>
    </header>
  );
};


const Domain = ({ name, category, interstitial, premium }) => {
  if (!name) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{category}</h5>
          </td>
          <td>
            <h4>{interstitial}</h4>
          </td>
          <td>
            <p>{premium}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
