import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserData as userdata } from "../data/UserData";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import Update from "@material-ui/icons/Update";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const header = [
  "Id",
  "Name",
  "Username",
  "Email",
  "Phone",
  "Website",
  "Settings",
];

export default function DataPage() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((index) => {
              return (
                <TableCell
                  align={index === "Id" ? "left" : "right"}
                  key={index}
                >
                  {index}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">
                <div>
                  {/* <AddIcon color="primary" style={{ cursor: "pointer" }} /> */}
                  <DeleteIcon color="secondary" style={{ cursor: "pointer" }} />
                  <UpdateIcon style={{ cursor: "pointer" }} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
