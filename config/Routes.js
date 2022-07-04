import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Home from "../pages";

export default function RoutesGenerator() {

    return (
        <Switch>
            <Route
                path="/:category/search/:keyword/"
                component={Catalog}
            />

            <Route
                path="/:category/:id/"
                component={Detail}
            />

            <Route
                path="/:category"
                component={Catalog}
            />

            <Route
                path="/"
                component={Home}
            />
        </Switch>
    )
}