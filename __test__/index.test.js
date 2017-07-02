import React from 'react';
import App from '../src/app/index';
import {mount, shallow} from 'enzyme';

describe('<App />', () => {
    it('Renders 1 <App /> component', () => {
        const component = shallow(<App />);
        console.log(component);
    });
});
