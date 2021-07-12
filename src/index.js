import React from 'react';
import ReactDOM from 'react-dom';
import { MyIndoorGarden } from './components/components.js'

import './index.css'
var garden_url = "./gardens/test_garden.json"

ReactDOM.render(
    <MyIndoorGarden garden={garden_url}/>,
    document.getElementById('root')
);