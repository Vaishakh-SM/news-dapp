import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import logo from './logo.svg'
import './App.css'


const trial = async(provider: { getBlockNumber: () => any; })=>{
  const data = await provider.getBlockNumber()
  console.log("Data is ",data)
}

const trial2 = async()=>{
  const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
// Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log("Account:", await signer.getAddress());
}

function App() {
  const [count, setCount] = useState(-3)
  useEffect(()=>{
//     const provider = new ethers.providers.JsonRpcProvider();
//     console.log("Provider is ",provider)

// // The provider also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, we need the account signer...
//     const signer = provider.getSigner()
//     trial(provider);
        trial2();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
