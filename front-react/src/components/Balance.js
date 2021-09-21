import {React, useState, useEffect} from 'react';
import "./BodyApp.css"
import "./Balance.css"

function Balance() {
    return (
    <section className="balance">
        <h4 className="balanceHeader">Balance:</h4>
        <h5 className="balanceAmount">$3409</h5>
    </section>
    );
}

export default Balance;