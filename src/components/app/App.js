import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc'

const App = ({ bookstoreService }) => {
    console.log(bookstoreService);
    return <div>App</div>;
};

export default withBookstoreService()(App);