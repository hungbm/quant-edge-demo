import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import {TableContent} from "./components/table/table";

//import injectTapEventPlugin from 'react-tap-event-plugin';
import  faker from 'faker';
import _ from 'underscore';


export default class App extends React.Component {
    initiateData = [];
    tempData = [];
    topGainers = [];
    topLosers = [];
    constructor(props) {
        //injectTapEventPlugin();
        super(props);
        //create initiate data
        while(this.initiateData.length <60){
            this.initiateData.push({
                code:  Math.random().toString(36).substr(2, 3).toUpperCase(), //Random code
                name: faker.company.companyName().toUpperCase() + ' ' + faker.company.companySuffix().toUpperCase(), //Random name
                price: Math.floor(Math.random() * 100)+'.'+Math.random().toString().slice(2,4), //random price
                volume: Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000, //random volume from 1000 to 1000000
                change: '0.00',
                percentChange: '0.00',
                sessionValue: 0
            });
        }
        //Copy data from initiateData array to tempData
        for (var i =0 ; i< this.initiateData.length; i++){
            this.tempData[i] = {};
            for (var prop in this.initiateData[i]){
                this.tempData[i][prop] = this.initiateData[i][prop]; // copy properties to tempData
            }
        }

        this.topLosers = _.sortBy(this.tempData,'sessionValue').slice(0,20); //get top 20 element have greatest volume
        this.topGainers = _.sortBy(this.tempData,'sessionValue').reverse().slice(0,20); //get top 20 element have least volume
        this.state = {
            initiateData: this.initiateData,
            value: 'gainers',
            tempData: this.tempData,
            test: '1'
        };
    }
    componentDidMount() {
        setInterval(this.timer, 5000); //Run every 5 sec
    };
    timer = () => {
        this.setState({tempData: this.tempData});
        //change value in tempData
        for (var i = 0; i< this.state.tempData.length; i++){
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1; // random + or -
            var initPrice = Number(this.initiateData[i].price); //save old price
            var newPrice = Number(this.state.tempData[i].price)+plusOrMinus*(Number(this.state.tempData[i].price)*Math.floor(Math.random() * 6))/100; // new price
            var newVolume = Number(this.state.tempData[i].volume)+Math.floor(Math.random() * (30 - 10 + 1)) + 10;
            var sessValue = (newPrice - initPrice)*(newVolume-Number(this.state.tempData[i].volume)) + Number(this.state.tempData[i].sessionValue);
            this.state.tempData[i].price=newPrice; //set price = newPrice
            this.state.tempData[i].change =  newPrice - initPrice; //compare new to old
            this.state.tempData[i].volume =  newVolume;
            this.state.tempData[i].percentChange = ((newPrice - initPrice)/initPrice)*100;
            this.state.tempData[i].sessionValue = sessValue;

            //sort data
            this.topLosers = _.sortBy(this.tempData,'sessionValue').slice(0,20); //get top 20 element have greatest volume
            this.topGainers = _.sortBy(this.tempData,'sessionValue').reverse().slice(0,20); //get top 20 element have least volume

            //console.log(Math.floor(Math.random() * (30 - 10 + 1)) + 10);
        }
    };
    handleChange = (value) => {
        this.setState({
            value: value,
            test: this.state.test+1
        });
    };
    render() {
        return (
            <MuiThemeProvider>
                <Tabs
                    style={{minWidth:'900px',width:'1000px', margin: 'auto'}}
                    value={this.state.value}
                    onChange={this.handleChange}
                    tabItemContainerStyle={{width: '100%'}}
                >

                    <Tab
                        label="S&P/ASX"
                        value="holder1"
                        disabled={true}
                        style={{fontWeight: 'bold', color:'white',fontSize: '17px'}}
                    >
                    </Tab>
                    <Tab
                        label=''
                        value="holder2"
                        disabled={true}
                    >
                    </Tab>
                    <Tab
                        label=" "
                        value="holder3"
                        disabled={true}
                    >
                    </Tab>
                    <Tab
                        label="TOP GAINERS"
                        value="gainers"
                    >
                        <TableContent content = {this.topGainers} />
                    </Tab>
                    <Tab
                        label="TOP LOSERS"
                        value="losers"
                    >
                        <TableContent content = {this.topLosers}/>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}
