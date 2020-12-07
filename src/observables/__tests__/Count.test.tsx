/* eslint-disable no-undef */
import 'mobx-react-lite/batchingForReactDom';
import { cleanup } from '@testing-library/react';
import CountStore from '../Count';

describe('CountStore', () => {
    afterEach(cleanup);
    test('the count must be equal to 0 by default', () => {
        expect(CountStore.currentCount).toEqual(0);
    });
    test('the count must be equal to 1 after the incrementation', () => {
        CountStore.increment();
        expect(CountStore.currentCount).toEqual(1);
    });
    test('the count must be equal to 0 after the decrementation', () => {
        CountStore.decrement();
        expect(CountStore.currentCount).toEqual(0);
    });
});
