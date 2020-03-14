import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../../components/Card';

const propTypes = {
  loading: PropTypes.bool.isRequired
};

class Youth extends Component {
  constructor (props) {
    super(props); 
  }

  render () {
    return (
      <DocumentTitle title={`Youth Reporting - ${window.App.name}`}>
        <div className="container p-5 mx-auto flex flex-col ">
          <h1 className="text-xl font-medium text-gray-700 text-center">Youth Page</h1>
          <div className="flex flex-wrap sm:flex-row">
            {/* Card 1 */}
            <Card title="Population" indicator="youth"/>
            <Card title="Taux de chomage" indicator="youth" />
            <Card title="Prevalence du HIV" indicator="youth" />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Youth.propTypes = propTypes;
const mapStateToProps = ({ loading }) => ({ loading });
export default connect(mapStateToProps)(Youth);
