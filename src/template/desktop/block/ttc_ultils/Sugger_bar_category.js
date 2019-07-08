import React, {Component} from 'react';

class SuggerBarCategory extends Component {
    constructor(props) {
        super(props);

    }

    listtag() {
        if(this.props.tag) {
            let data = this.props.tag;
            var result = [];
            for(var i in data)
                result.push(data[i]);

            return result.map((object, index) => {
                return (
                    <li key={index}><a href={object.tag_link} title="">{object.tag_name}</a></li>
                )
            })
        }
    }

    render() {
        return (
            <h2 className="title">
                <i className={this.props.icons}/>
                <div className="inner-title">
                    <h2 className="active"><a href="#" title="">{this.props.name}</a></h2>
                    <ul className="list-cat">
                        {this.listtag()}
                    </ul>
                </div>
            </h2>
        );
    }
}

export default SuggerBarCategory;