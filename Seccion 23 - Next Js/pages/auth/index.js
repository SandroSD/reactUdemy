import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Main Page - {props.appName}</h1>
        <User name="Sandro" age={29} />
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'});
        }, 100);
    });
    return promise;
}

export default authIndexPage;