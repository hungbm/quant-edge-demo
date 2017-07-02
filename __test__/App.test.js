import React from 'react';
import App from '../src/app/App';
import {mount, shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';


describe('<App />', () => {
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

    //This test not
    it('Switch between 2 tabs', () => {
       const component =  mount(<App />);
        expect(component.state('value')).toEqual('gainers');
        console.log(component);
        const tab = ReactDOM.findDOMNode(
            ReactTestUtils.findRenderedDOMComponentWithTag(
                component.instance(), 'Tab'
            )
        );
        console.log(tab);
        ReactTestUtils.Simulate.touchTap(tab);
        //console.log(component.props.timer());
        //tab.simulate('tap');
       expect(component.state('value')).toEqual('losers');
    });
});
