import React from 'react';
import ReactDOM from 'react-dom';
import { MyIndoorGarden } from './components/components.js'
import garden_json from './gardens/test_garden.json'

import './index.css'

ReactDOM.render(
    <MyIndoorGarden imported_garden={garden_json}/>,
    document.getElementById('root')
);