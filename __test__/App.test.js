import React from 'react';
import App from '../src/app/App';
import {mount, shallow} from 'enzyme';
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

    it(' has TableContent components with array content of 20 items', () => {
        const component =  shallow(<App />);
        expect(component.find('TableContent').first().props().content.length).toEqual(20);
        expect(component.find('TableContent').last().props().content.length).toEqual(20);
    });

    it('Switch between 2 tabs', () => {
       const component =  shallow(<App />);
        expect(component.state('value')).toEqual('gainers');
        component.find('Tabs').props().onChange('losers');
        expect(component.state('value')).toEqual('losers');
    });

    it('make data change after 5 sec ', () => {
        //this test componentDidMount
        const component =  mount(<App />);
        expect(component.state('tempData')).toEqual(component.state('initiateData'));
        jest.runTimersToTime(6000);
        expect(component.state('tempData')).not.toEqual(component.state('initiateData'));
    });
});
