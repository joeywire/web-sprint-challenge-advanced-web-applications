import React from 'react'; 
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest}) => {
    //Grab our token if it exists 
    const token = window.localStorage.getItem('token');
    return ( 
        <Route 
            //pass in all props except compononent
            {...rest}
            render={(props) => {
                if (token) {
                    //If token is good we render our component 
                    return <Component {...props} />;
                } else {
                    //else re-direct home
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute; 