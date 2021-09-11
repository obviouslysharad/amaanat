import React from 'react';
import {useSelector} from "react-redux";
import AccountComponent from './AccountComponent';

function AccountListing() {
    const accounts = useSelector((state) => state);
    console.log(accounts);

    return (
        <div className="ui grid container">
            <AccountComponent />
        </div>
    )
}

export default AccountListing
