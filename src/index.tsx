import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './Hello';
import { container } from './ioc';
import { Provider } from './ioc.react';

const App: React.FC = () => {
    return (
        <Provider container={container}>
            <div>
                <Hello />
            </div>
        </Provider>
    );
}; 

ReactDOM.render(<App />, document.getElementById('root'));