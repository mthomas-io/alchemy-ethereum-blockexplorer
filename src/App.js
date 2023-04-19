import { useEffect, useState } from 'react';
import { alchemyClient } from './vendor/alchemy';

import './App.css';
import { BlockDetails } from './components/BlockDetails';

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    alchemyClient.core.getBlockNumber()
      .then(setBlockNumber);
  }, []);

  return <div>
    <button onClick={() => setBlockNumber(current => current - 1)}>Previous</button>
    <button onClick={() => setBlockNumber(current => current + 1)}>Next</button>
    <h1>Block number: {blockNumber}</h1>

    {blockNumber && <BlockDetails blockNumber={blockNumber} />}
  </div>;
}

export default App;
