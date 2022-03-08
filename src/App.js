import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainScreen from './MainScreen.js';
import AboutScreen from "./AboutScreen.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainScreen} exact={true} />
                <Route path="/about" component={AboutScreen} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;