import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: this.props.title,
        indicator: this.props.indicator
      };
    }
  
    render() {
      return (
        <div className="w-full md:w-1/2 xl:w-1/3 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center flex items-center">
                <div className="mr-3 w-2/3">
                    <h2 className="text-xl font-medium text-gray-700 text-left">{this.state.title}</h2>
                </div>
                <div className="flex flex-col float-right w-1/3">
                    <Link to={this.state.indicator + '/' + this.state.title.toLowerCase().split(' ').join('-')} className="px-2 py-1 bg-orange-500 text-white rounded-full">Explore</Link>
                </div>
            </div>
        </div>
      );
    }
  }

export default Card;
