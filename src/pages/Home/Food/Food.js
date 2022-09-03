import React from 'react';
import { useParams } from 'react-router-dom';
import BreakFast from './BreakFast/BreakFast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';

const Food = () => {
    const { idFood } = useParams();

    if (idFood === 'breakfast') {
        return <BreakFast />
    }
    else if (idFood === 'lunch') {
        return <Lunch />
    }
    else {
        return <Dinner />
    }
};

export default Food;