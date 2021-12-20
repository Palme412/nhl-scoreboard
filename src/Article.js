import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content article-body" key={this.props.index}>
                <p>
                    {this.props.name}
                </p>
                <p>
                    The Great Eight
                </p>
                <h3 className="has-text-centered">{this.props.user}</h3>
                <p>
                    In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                    Arcu non sodales neque sodales ut etiam sit amet.
                </p>
            </div>
        )
    }
}

export default Article;