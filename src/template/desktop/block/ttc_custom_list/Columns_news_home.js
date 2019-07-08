import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import SuggerBarCategory from "../ttc_ultils/Sugger_bar_category";

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Columns_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tag_left : null,
            tag_right : null
        }
    }

    listSongTre() {
        if (this.props.columns_news) {
            let data = this.props.columns_news.ttc_custom_list[2];
            var result = [];
            for(var i in data)
                result.push(data[i]);
            let list_left = result[0].list_left;

            return list_left.data.map((object, index) => {
                return (
                    <div className="col-6" key={index}>
                        <article className="art art-young">
                            <a href="#" title=""><img src={TtcHelper.ThumbImg(object.object_thumbnail, "s300")}/></a>
                            <h3><a href="#">{object.object_title} </a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    listTheThao() {
        if (this.props.columns_news) {
            let data = this.props.columns_news.ttc_custom_list[2];
            var result = [];
            for(var i in data)
                result.push(data[i]);
            let list_right = result[0].list_right;
            return list_right.data.map((object, index) => {
                return (
                    <div className="col-6" key={index}>
                        <article className="art art-young">
                            <a href="#" title=""><img src={TtcHelper.ThumbImg(object.object_thumbnail, "s300")}/></a>
                            <h3><a href="#">{object.object_title} </a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    tagSongTre() {
        if(this.props.columns_news) {
            let data = this.props.columns_news.ttc_custom_list[2];
            var result = [];
            for(var i in data)
                result.push(data[i]);
            let list_left = result[0].list_left;
            return list_left.list_tag;
        }
    }

    tagTheThao() {
        if(this.props.columns_news) {
            let data = this.props.columns_news.ttc_custom_list[2];
            var result = [];
            for(var i in data)
                result.push(data[i]);
            let list_right = result[0].list_right;
            return list_right.list_tag;
        }
    }

    render() {
        return (
            <div className="block block-last">
                <div className="box box-left">
                    <SuggerBarCategory icons="icon icon-young" name="Sống Trẻ" tag={this.tagSongTre()}/>
                    <div className="row">
                        {this.listSongTre()}
                    </div>
                </div>
                <div className="box box-right">
                    <SuggerBarCategory icons="icon icon-sport" name='Thể thao' tag={this.tagTheThao()}/>
                    <div className="row">
                        {this.listTheThao()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        columns_news : state.home[0].origin_4
    }
};

export default connect(mapStateToProps, null)(Columns_news_home);