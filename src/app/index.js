import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import {TableContent} from "./components/table/table";

import injectTapEventPlugin from 'react-tap-event-plugin';
import  faker from 'faker';
import _ from 'underscore';

var styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    },
};
class App extends React.Component {
    initiateData = [];
    tempData = [];
    topGainers = [];
    topLosers = [];
    constructor(props) {
        injectTapEventPlugin();
        super(props);
        //create initiate data
        while(this.initiateData.length <60){
            this.initiateData.push({
                code:  Math.random().toString(36).substr(2, 3).toUpperCase(), //Random code
                name: faker.company.companyName().toUpperCase() + ' ' + faker.company.companySuffix().toUpperCase(), //Random name
                price: Math.floor(Math.random() * 100)+'.'+Math.random().toString().slice(2,4), //random price
                volume: Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000, //random volume from 1000 to 1000000
                change: '0.00',
                percentChange: '0.00%'
            });
            // console.log(this.initiateData);
        }
        this.tempData = this.initiateData;
        this.topGainers = _.sortBy(this.tempData,'volume').slice(0,20); //get top 20 element have greatest volume
        this.topLosers = _.sortBy(this.tempData,'volume').reverse().slice(0,20); //get top 20 element have least volume
        console.log(this.topGainers );
        console.log(this.topLosers );


        this.state = {
            value: 'gainers',
        };
    }
    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };
    render() {
        return (
            <MuiThemeProvider>
                <Tabs
                    style={{minWidth:'900px'}}
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
                        label=" "
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
                        <TableContent content = {this.topGainers}/>
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

render(<App />, window.document.getElementById('app'));