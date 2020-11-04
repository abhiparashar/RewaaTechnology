import React from 'react';
import ButtonAppBar from './components/Navbar'
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ProductRead from './components/Productread'
import CreateProduct from './components/CreateProduct'
import Update from './components/Update'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
                <React.Fragment>
                    <Route path="/" component={ButtonAppBar} />
                    <Route path="/update/:id" component={Update} />
                    <Route path="/products" component={ProductRead} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/createproduct" component={CreateProduct} />
                </React.Fragment>
        </Router>
    );
}

export default App;
