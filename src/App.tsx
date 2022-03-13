import React from 'react';
import './App.css';

/* const Heading: React.FC<{ title: string; children?: JSX.Element }> = ({
  title,
}) => {
  return <h1>{title}</h1>;
}; */

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function HeadingWithElement({ title }: { title: React.ReactElement }) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <div className="App">
      <Heading title="Something texty"></Heading>
      <HeadingWithElement
        title={<div>Something elementy</div>}
      ></HeadingWithElement>
    </div>
  );
}

export default App;
