import React from 'react';
import { Route, Routes as ReactRouterRouts } from 'react-router-dom';
import Entrance from '../components/styles/Entrance';



const Routes = props => {
    return (
        <div>
            <ReactRouterRouts>
                <Route path="/" element={<Entrance formButton={"SIGN IN"}/>} />            
                <Route path="/registration" element={<Entrance formButton={"SIGN UP"}/>} />            
            </ReactRouterRouts>
        </div>
    );
};



export default Routes;