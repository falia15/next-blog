import { FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout: FunctionComponent = (props) => {
    return(
        <div>
            <Head>
                <title>web app</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;