import React from 'react';

interface MyComponentProps {
    title: string;
    onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

export default MyComponent;