import * as React from 'react';

interface Props {
  firstName: string;
  lastName: string;
}

// React.StatelessComponent 와 React.SFC 는 deprecated 됨
const App: React.FunctionComponent<Props> = ({firstName, lastName}) => (
  <div>
    {firstName} {lastName}
  </div>
);

export default App;