import React from 'react';
import MyComponent from './components/MyComponent';

const App: React.FC = () => {
    return (
        <div>
            <MyComponent title="Hello World" onClick={() => alert('Clicked!')} />
        </div>
    );
};

export default App;