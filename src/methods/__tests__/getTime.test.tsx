/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import getTime from '../getTime';

describe('getTime', () => {
    afterEach(cleanup);
    test('should return the current date', () => {
        const today: Date = new Date();
        const time: string = today.getHours() + ':' + today.getMinutes();
        expect(getTime).toEqual(time);
    });
});
