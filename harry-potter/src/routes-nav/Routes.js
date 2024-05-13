import React from "react";
import { Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";


function Routes () {
    return (
        <div>
                <Route exact path="/">
                    <Homepage />
                </Route>
        </div>
    )
}

export default Routes;