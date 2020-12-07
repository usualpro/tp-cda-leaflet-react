import React from 'react';
import 'mobx-react-lite/batchingForReactDom';
import { render } from 'react-dom';
import './stylesheets/main.scss';
import Application from './Application';

render(<Application />, document.getElementById('root'));
