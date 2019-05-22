import React from 'react';
import GreenBanner from '../../src/components/GreenBanner';
import renderer from 'react-test-renderer';

test('should render without crash', () => {
    const tree = renderer
        .create(<GreenBanner text={'The price includes insurance, maintenance & Road side.'}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});