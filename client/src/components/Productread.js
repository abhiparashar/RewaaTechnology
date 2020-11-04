import React,{useEffect,useState} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom';
import {getProducts,deleteproduct} from '../actions/product'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  table: {
    minWidth: 700,
    maxWidth: "90%",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const[products,setProducts] = useState([])
  const[success,setSuccess] = useState(false)
  const[message,setMessage] = useState('')
  useEffect(() => {
        loadProducts();
    }, []);
    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) console.log(data.error);
            else setProducts(data.data);
        });
    };
    const handleDeleteClick = id => {
        deleteproduct(id).then(data => {
            if (data.error) setSuccess(false);
            else {
                setSuccess(true);
                setMessage(data.message);
                loadProducts();
            }
        });
    };

  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Product Id</StyledTableCell>
            <StyledTableCell align="center">Name&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Price&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Quantity&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Description&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Update&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Delete&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row,i) => (
            <StyledTableRow key={row.name+i}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">
                <Link to={`/update/${row.id}`}>
                Update
                <IconButton>
                  <UpdateIcon  />
                </IconButton>
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">
                Delete
                <IconButton onClick={() => handleDeleteClick(row.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}