import React from 'react';
import { shallow } from 'enzyme';

import '../setupTests';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en componente <GifExpertApp />', () => {
	test('Debe renderizar correctamente el componente', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
