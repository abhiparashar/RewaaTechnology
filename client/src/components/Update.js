import React,{useState} from 'react'
import {
  TextField,
  makeStyles,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  FormGroup,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import clsx from "clsx";
import {getProduct,updateProduct} from '../actions/product'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2),
    minWidth: 500,
    marginTop: theme.spacing(4),
    justifyContent: "center",
    maxWidth: "80%",
    margin: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  authForm: {
    width: "100%",
    minHeight: 350,
    justifyContent: "center",
  },
  button: {
    minWidth: "150px",
    maxWidth: 250,
  },
  alert: {
    width: 480,
  },
}));

const Update = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        price: '',
        quantity: '',
        description: '',
        error: false,
        success: false
    });

    React.useEffect(() => {
        readABlog()
    }, [])
    // const readABlog =async () => {
    //     let res = await getProduct(window.location.pathname.split('/')[2])
    //     if(res.error){
    //         console.log(res.error)
    //     }
    //     else{
    //         return res.data
    //     }
    // }

    const readABlog = () => {
       
           getProduct(window.location.pathname.split('/')[2]).then(data => {

                JSON.stringify(data.data)
                console.log(data)
                if (data.error) console.log(data.error);
                else {
                    const res= data.data[0]
                    setValues({ ...values,name:res.name,price:res.price,quantity:res.quantity,description:res.description });

                }
            });
        
    };

    const { name, price, quantity, description, error,success} = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value, error: false, success: false});
    };

    const handleSubmit = async event => {
        event.preventDefault();
        
        setValues({ ...values});
        let res = await updateProduct(window.location.pathname.split('/')[2],{ name, price, quantity, description });
        if (res.error) {
            setValues({ ...values, error: res.error });
            // getStatus ? getStatus(false) : null;
        } else {
            setValues({
                ...values,
                sent: true,
                name: '',
                price: '',
                quantity: '',
                description: '',
                success: res.success
            });
            // getStatus ? getStatus(true) : null;
        }
      }
    return (
        <div className={classes.wrapper} elevation={3}>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            key="4"
            required
          >
            <InputLabel htmlFor="standard-adornment-password" required>
              Name
            </InputLabel>
            <Input
              required={true}
              placeholder="Please enter name of the product"
              fullWidth
              id="standard-adornment-password"
              type="text"
              value={name}
              onChange={handleChange("name")}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            key="4"
            required
          >
            <InputLabel htmlFor="standard-adornment-password" required>
              Price
            </InputLabel>
            <Input
              required={true}
              placeholder="Please input price of the product."
              fullWidth
              id="standard-adornment-password"
              type="number"
              value={price}
              onChange={handleChange("price")}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            key="4"
            required
          >
            <InputLabel htmlFor="standard-adornment-password" required>
              Quantity
            </InputLabel>
            <Input
              required={true}
              placeholder="Provide your mail please"
              fullWidth
              id="standard-adornment-password"
              type="number"
              value={quantity}
              onChange={handleChange("quantity")}
            />
          </FormControl>
          <FormControl></FormControl>
          <FormControl key={"5"} className={classes.margin} required>
            <TextField
              required
              fullWidth
              multiline
              margin="normal"
              placeholder="Product Description!!"
              autoCorrect="true"
              id="standard-required"
              type="text-area"
              value={description}
              rows={3}
              rowsMax={10}
              onChange={handleChange("description")}
            />
            <FormHelperText>
              write your product description, should have at least 20
              characters.
            </FormHelperText>
          </FormControl>

          <Button
            className={clsx(classes.margin, classes.button)}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Update Product
          </Button>
        </FormGroup>
      </form>
    </div>
    )
}


export default Update; 
