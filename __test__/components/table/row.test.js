import React from 'react';
import RowContent from '../../../src/app/components/table/row';
import {mount,shallow} from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('table.js', ()=>{
    const mountWithContext = (node) => mount(node, {
        context: {
            muiTheme: getMuiTheme(),
        },
        childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired,
        }
    });

    it('render correct color base on change', () => {
        //key={index} rowContent = {row}
        // { code: "V71", name: "WEIMANN INC INC", price: 75.6697, volume: 699576, change: -2.340299999999999, percentChange: -2.9999999999999987, sessionValue: -25.74329999999999 }
        const component = mount(
            <RowContent key={59} rowContent = {{ code: "V00", name: "WEIMANN INC INC", price: 75.6697, volume: 699576, change: -2.340299999999999, percentChange: -2.9999999999999987, sessionValue: -25.74329999999999 }}/>
            ,{
                context: {
                    muiTheme: getMuiTheme(),
                },
                childContextTypes: {
                    muiTheme: React.PropTypes.object.isRequired,
                },
            }
        ).setState({ rowNum: 1 });

        expect(component.instance().renderChangeColor().props.style.color).toEqual('#ff0000');
        expect(component.instance().renderPercentChangeColor().props.style.color).toEqual('#ff0000');

        //console.log(component.instance().renderChangeColor().props.style.color);

         component.setProps({rowContent: { code: "V00", name: "WEIMANN INC INC", price: 75.6697, volume: 699576, change: 2.340299999999999, percentChange: 2.9999999999999987, sessionValue: -25.74329999999999 }});
        expect(component.instance().renderChangeColor().props.style.color).toEqual('#66ff66');
        expect(component.instance().renderPercentChangeColor().props.style.color).toEqual('#66ff66');
         //console.log(component.insta.renderChangeColor());
    });
});