import React from 'react';
import ReactDOM  from 'react-dom';

import App from './App';

const mount = (el) => {
    ReactDOM.render(<App />, el);
};

if(process.env.NODE_ENV === 'development'){
    const rootEle =  document.querySelector('#_mrktng-root-ele');
    if(rootEle) {
        mount(rootEle);
    }
}

export { mount };