/* eslint-disable no-undef */
import * as React from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { render, cleanup } from '@testing-library/react';
import Application from '../Application';

describe('Application', () => {
    afterEach(cleanup);
    test('display \'Hello World at {current_time}!\' into h2 element', () => {
        const today = new Date();
        const time = today.getHours() + ':' + today.getMinutes();
        const { getByText } = render(<Application />);
        const elem = getByText(`Hello World at ${time}!`);
        expect(elem.tagName.toLowerCase()).toEqual('h2');
    });
});
