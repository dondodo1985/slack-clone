import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./Chat";
import React from "react";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        // BEM naming convention
        <div className="App">
            <Router>
                {!user ? (
                    <Login/>
                ) : (
                    <>
                        <Header/>
                        <div className="app_body">
                            <Sidebar/>
                            <Switch>
                                <Route path="/room/:roomId">
                                    <Chat/>
                                </Route>
                                <Route path="/">
                                    <h1>Welcome</h1>
                                </Route>
                            </Switch>
                        </div>
                    </>
                )}
            </Router>
        </div>

    );
}

export default App;