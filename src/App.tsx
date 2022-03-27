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

const Heading2 = ({ title }: { title: string }) => <h1>{title}</h1>;

function HeadingWithElement({ title }: { title: React.ReactNode }) {
  return <h1>{title}</h1>;
}

function Dialog({
  header,
  children,
}: {
  header?: React.ReactNode | (() => React.ReactNode);
  children: React.ReactNode;
}) {
  return (
    <div>
      {header && (
        <div>
          <strong>{typeof header === 'function' ? header?.() : header} </strong>
        </div>
      )}
      {children}
    </div>
  );
}

/* 1. Function declaration - 1 */
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

/* 1. Function declaration props - 2 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
type AppProps<T> = {
  items: T[];
  render: (item: T) => React.ReactNode;
};

function ListProps<ListItem>({ items, render }: AppProps<ListItem>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

/* 2. React.FC */
const FCListProps: React.FC<AppProps<any>> = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

/* 3. Arrow function props - 1 */
// https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
const ListPropsFunc1 = <ListItem,>({ items, render }: AppProps<ListItem>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

/* 3. Arrow function props - 2 */
const ListPropsFunc2 = <ListItem extends unknown>({
  items,
  render,
}: AppProps<ListItem>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Heading title="Something texty"></Heading>
      <Heading2 title="Something texty"></Heading2>
      <HeadingWithElement
        title={<div>Something elementy</div>}
      ></HeadingWithElement>
      <HeadingWithElement title="Plain Text"></HeadingWithElement>
      <Dialog header={() => <span>This is the header</span>}>
        This would be the content
      </Dialog>
      <Dialog header={<span>This is the header</span>}>
        This would be the content
      </Dialog>
      <List
        items={[1, 2, 3, 4]}
        render={(item: number) => `number is ${item}`}
      />
      <ListProps
        items={[1, 2, 3, 4]}
        render={(item: number) => `number is ${item}`}
      />
      <FCListProps
        items={[1, 2, 3, 4]}
        render={(item: number) => `number is ${item}`}
      />
      <ListPropsFunc1
        items={[1, 2, 3, 4]}
        render={(item: number) => `number is ${item}`}
      />
      <ListPropsFunc2
        items={[1, 2, 3, 4]}
        render={(item: number) => `number is ${item}`}
      />
    </div>
  );
}

export default App;
