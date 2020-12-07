/* eslint-disable no-undef */
import * as React from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { render, cleanup } from '@testing-library/react';
import Buttons from '../Buttons';
import CountStore from '../observables/Count';

describe('Buttons', () => {
    afterEach(cleanup);
    test('The buttons component should have at least 2 buttons', () => {
        const { getByTestId } = render(<Buttons />);
        expect(getByTestId('increment-btn')).not.toBeUndefined();
        expect(getByTestId('decrement-btn')).not.toBeUndefined();
    });
    test('When a click occur on the increment button, the storeCount should return 1', () => {
        const { getByTestId } = render(<Buttons />);
        const incrementBtn = getByTestId('increment-btn');
        incrementBtn.click();
        expect(CountStore.currentCount).toBe(1);
    });
    test('When a click occur on the decrement button, the storeCount should return 0', () => {
        const { getByTestId } = render(<Buttons />);
        const decrementBtn = getByTestId('decrement-btn');
        decrementBtn.click();
        expect(CountStore.currentCount).toBe(0);
    });
});
