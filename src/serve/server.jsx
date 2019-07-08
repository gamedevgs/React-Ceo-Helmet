import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import _HTML from './../app/_html';
import Layout from './../app/Layout';

export default function serverRenderer({clientStats, serverStats}) {
    return (req, res, next) => {
        const context = {};
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Layout/>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(_HTML({
            markup: markup,
            helmet: helmet,
        }));
    };
}
