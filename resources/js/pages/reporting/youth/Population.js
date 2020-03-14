import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Card, CardContent, CircularProgress, Typography, Radio, RadioGroup,FormControlLabel} from '@material-ui/core';
import Chart from "react-apexcharts";
import {getYouthPopulation} from '../../../actions/reporting';
import {getMalePopulation} from '../../../actions/reporting';
import {getFemalePopulation} from '../../../actions/reporting';
import {getYears} from '../../../actions/reporting';
import {numberWithCommas} from '../../../helpers/help';

const propTypes = {
  loading: PropTypes.bool.isRequired
};

class Population extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      dataTotal: [],
      dataMale : [],
      dataFemale : [],
      years : []
    };
    this.seriesBar = this.seriesBar.bind(this);
    this.optionsBar = this.optionsBar.bind(this);

    this.seriesDonut = this.seriesDonut.bind(this);
    this.optionsDonut = this.optionsDonut.bind(this);
  }

  componentDidMount(){
    getMalePopulation().then(data => {
      data.data
      .filter( i => i.population !== 0)
      .map(v => {
        let dataPoint = this.state.dataMale.concat(v.population);
        getYears().then(data => {
          data.data
          .filter(j => j.idtemps == v.temps_idtemps)
          .map(v => {
            let years = this.state.years.concat(v.year);
            this.setState({ years: years })
          })
        })
        this.setState({ dataMale: dataPoint })
      })
      console.log(this.state);
    })

    getFemalePopulation().then(data => {
      data.data
      .filter( i => i.population !== 0)
      .map(v => {
        let dataPoint = this.state.dataFemale.concat(v.population);
        this.setState({ dataFemale: dataPoint })
      })
    })
  }

  optionsBar(){
    return {
      chart: {
        id: "population-bar",
      },
      title: {
        text: "Population of youth in Morocco foreach gender by year"
      },
      xaxis: {
        categories: this.state.years
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return numberWithCommas(val) + " Of Million"
          }
        }
      }
    }
  }
  seriesBar(){
    return [
      {
        name: "Male",
        data: this.state.dataMale
      },{
        name: "Female",
        data: this.state.dataFemale
      }
    ]
  }

  optionsDonut(){
    return {
      chart: {
        id: "population-donut",
        type: 'donut'
      },
      title: {
        text: "Population By Gender"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      labels: ['Male', 'Female'],
      tooltip: {
        y: {
          formatter: function (val) {
            return numberWithCommas(val) + " Of Million"
          }
        }
      }
    }
  }
  seriesDonut(){
    return [
        this.state.dataMale.reduce((a, b) => a + b, 0),
        this.state.dataFemale.reduce((a, b) => a + b, 0)
    ]
  }

  renderBarChart(){
    const {dataMale, dataFemale, years} = this.state;
    return years && years.length > 10 ? 
    //<Bar data={this.chartData} options={this.barChartOptions} /> 
    <Chart className="py-8" options={this.optionsBar()} series={this.seriesBar()} type="bar" />
    : <div className="py-6 flex justify-center"><CircularProgress /></div>;
  }
  renderDonutChart(){
    const {dataMale, dataFemale, years} = this.state;
    return years && years.length > 10 ? 
    //<Bar data={this.chartData} options={this.barChartOptions} /> 
    <Chart className="py-8" options={this.optionsDonut()} series={this.seriesDonut()} type="donut" />
    : <div className="py-6 flex justify-center"><CircularProgress /></div>;
  }
  renderPieChart(){
    const {dataMale, dataFemale, years} = this.state;
    return years && years.length > 10 ? 
    //<Bar data={this.chartData} options={this.barChartOptions} /> 
    <Chart className="py-8" options={this.optionsDonut()} series={this.seriesDonut()} type="donut" />
    : <div className="py-6 flex justify-center"><CircularProgress /></div>;
  }

  render () {    
    return (
      <DocumentTitle title={`Population - Youth Reporting - ${window.App.name}`}>
        <div className="container w-full p-5 mx-auto flex flex-col ">
          <h1 className="text-xl font-medium text-gray-700 text-center">Population Page</h1>
            <div className="w-full">

            </div>
          <div className="flex flex-wrap flex-grow sm:flex-row">
            <div className="w-full md:w-full xl:w-1/5 p-2">
              <Card variant="outlined" className="rounded-lg float-left shadow-lg mb-5 md:w-1/3 xl:w-full">
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Filter By Gender
                    <RadioGroup aria-label="gender" name="gender1" onChange={() => console.log()}>
                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                  </RadioGroup>
                  </Typography>
                  <Typography variant="body2" component="p">
                    
                  </Typography>
                </CardContent>
              </Card>
              <Card variant="outlined" className="rounded-lg float-left shadow-lg mb-5 md:w-1/3 xl:w-full">
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Filter By Milieu
                    <RadioGroup aria-label="Milieu" name="milieu" onChange={() => console.log()}>
                    <FormControlLabel value="rural" control={<Radio color="primary" />} label="Rural" />
                    <FormControlLabel value="urbain" control={<Radio color="primary" />} label="Urbain" />
                  </RadioGroup>
                  </Typography>
                  <Typography variant="body2" component="p">
                    
                  </Typography>
                </CardContent>
              </Card>
              <Card variant="outlined" className="rounded-lg float-left shadow-lg mb-5 md:w-1/3 xl:w-full">
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Filter By Years
                    <RadioGroup aria-label="gender" name="gender1" onChange={() => console.log()}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                  </Typography>
                  <Typography variant="body2" component="p">
                    
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-full xl:w-3/5 p-2">
              <div className="bg-white mb-4 rounded-lg shadow-lg">
                {this.renderBarChart()}
              </div>
              <div className="bg-white mb-4 rounded-lg shadow-lg">
                {this.renderBarChart()}
              </div>
            </div>
            <div className="w-full md:w-full xl:w-1/5 p-2">
              <div className="bg-white mb-4 rounded-lg shadow-lg md:w-1/3 xl:w-full">
                {this.renderDonutChart()}
              </div>
              <div className="bg-white mb-4s rounded-lg shadow-lg md:w-1/3 xl:w-full">
                {this.renderDonutChart()}
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Population.propTypes = propTypes;
const mapStateToProps = ({ loading }) => ({ loading });
export default connect(mapStateToProps)(Population);
