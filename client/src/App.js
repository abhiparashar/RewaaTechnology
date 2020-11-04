import React from 'react';
import ButtonAppBar from './components/Navbar'
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ProductRead from './components/Productread'
import CreateProduct from './components/CreateProduct'
import Update from './components/Update'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute'

function App() {
    return (
        <Router>
                <React.Fragment>
                    <PrivateRoute path="/" component={ButtonAppBar} />
                    <PrivateRoute  path="/update/:id" component={Update} />
                    <PrivateRoute path="/products" component={ProductRead} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <PrivateRoute path="/createproduct" component={CreateProduct} />
                </React.Fragment>
        </Router>
    );
}

export default App;
