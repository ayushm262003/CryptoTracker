import React from "react";
import './MyFooter.css';

function MyFooter()
{
    const year = new Date().getFullYear() ;
    return <footer><p>Copyright © {year} Ayush Mishra</p></footer>;
}

export default MyFooter;
