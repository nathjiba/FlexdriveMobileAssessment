import React from 'react';
import CarCard from '../../src/components/CarCard';
import renderer from 'react-test-renderer';
import TestData from '../../MockData'

test('should render without crash', () => {
    const {
        featureImage,
        location,
        rideshareEligible,
        model,
        pricing,
        year,
        make
    } = TestData.CAR_OBJECT
    const tree = renderer
        .create(<CarCard
            image={featureImage}
            location={location}
            rideshareEligible={rideshareEligible}
            model={model}
            price={pricing[0]}
            year={year}
            make={make}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});