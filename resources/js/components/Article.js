import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
    title: PropTypes.string,
    author: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
};


class Article extends Component {
    constructor (props) {
        super(props);        
        this.state = {
            title: this.props.title,
            author: this.props.author,
            image: this.props.image,
            description: this.props.description
        };
      }

    render() {
        return (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                    <Link to="/reporting/youth">
                        <img alt="Placeholder" className="block h-auto w-full" src={this.state.image} />
                    </Link>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg font-bold">
                            <Link to="/reporting/youth" className="no-underline hover:underline text-black">
                                {this.state.title}
                            </Link>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            14/12/2019
                        </p>
                    </header>
                    <main className="flex items-center justify-between leading-tight py-0 px-2 md:px-4">
                        <p className="text-grey-darker text-base">
                        {this.state.description}
                        </p>
                    </main>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                            <p className="ml-2 text-sm">
                                • {this.state.author[0].name} <br /> • {this.state.author[1].name}
                            </p>
                        </a>
                    </footer>
                </article>
            </div>
        );
    }
}

Article.propTypes = propTypes;

export default Article;