import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import Sum from './Sum';
 Enzyme.configure({adapter : new Adapter()});


describe("When testing with Enzyme", () => {
   it("render a h1", () => {

      const wrapper = shallow(<Sum x={1} y={2} />);

      expect(wrapper.find("h1").length).toBe(1);
   })
})

