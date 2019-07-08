import React, {Component} from 'react';
import Helmet from "react-helmet";
import {Switch, Route} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import Header from "../template/desktop/header";
import Footer from "../template/desktop/footer";
import home from "../template/desktop/page/home";

export default class Layout extends Component {

    render () {
        return (
            <div>
                <Helmet
                    htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
                    titleTemplate="%s | React App"
                    titleAttributes={{itemprop: "name", lang: "en"}}
                    meta={[
                        {name: "description", content: "Server side rendering example"},
                        {name: "viewport", content: "width=device-width, initial-scale=1"},
                    ]}
                    // link={[{rel: "stylesheet", href: "/pc/css/style.min.css"}]}
                />
                <Header/>
                <Switch>
                    <Route exact path='/' component={home}/>
                    {/*<Route path="/tin-tuc" component={Category}/>*/}
                    {/*<Route path="/biem-hoa" component={CategoryBiemHoa}/>*/}
                    {/*<Route path="/video" component={CategoryVideo}/>*/}
                    {/*<Route path="/ttc/tin-tuc/:slug/:date/:tslug/:id.html" component={Detail}/>*/}
                    {/*<Route path="/ttc/video/:date/:tslug/:id.html" component={DetailVideo}/>*/}
                    {/*<Route path="/nhan-vat/:author/:id.html" component={Profile}/>*/}
                    {/*<Route path="/user.html" component={User}/>*/}
                    {/*<Route path="/chu-de" component={Trending}/>*/}
                </Switch>
                <Footer/>
            </div>
        );
    }
}
