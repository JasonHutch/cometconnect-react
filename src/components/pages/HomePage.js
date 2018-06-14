import React from "react"
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <Link to={"/login"}>Login</Link>
        <p>
            Here's some more random text to see whats
            going on with this thing
        </p>
    </div>
);

export default HomePage;