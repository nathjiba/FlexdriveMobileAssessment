import React from 'react';
import Header from '../../src/components/Header';
import renderer from 'react-test-renderer';

test('should render without crash', () => {
    const tree = renderer
        .create(<Header count={10} location={"ATLANTA, GA"}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});