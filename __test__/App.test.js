import React from 'react';
import App from '../src/app/App';
import {mount, shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


describe('<App />', () => {

    beforeAll(()=> {
        injectTapEventPlugin();
        jest.useFakeTimers()
    });
    it('Renders 1 <App /> component', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1);
    });

     it('InitiateData Array created 60 items', () => {
        const component =  shallow(<App />);
         //console.log(component.state('initiateData').length);
         expect(component.state('initiateData').length).toEqual(60);
    });
    it('TempData Array same as InitiateData', () => {
        const component =  shallow(<App />);
        //console.log(component.state('tempData').length);
        expect(component.state('tempData')).toEqual(component.state('initiateData'));
    });

    it('Switch between 2 tabs', () => {
       const component =  shallow(<App />);
        expect(component.state('value')).toEqual('gainers');
        component.find('Tabs').props().onChange('losers');
        expect(component.state('value')).toEqual('losers');
    });

    it('timer() run corectly ', () => {

        const component =  shallow(<App />);
        expect(component.state('tempData')).toEqual(component.state('initiateData'));
        jest.runTimersToTime(20000);
        //console.log(component.props().timer());
        expect(component.state('tempData')).not.toEqual(component.state('initiateData'));
    });
});
