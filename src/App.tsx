import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import { Navbar } from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"

const trial = async (provider: { getBlockNumber: () => any }) => {
	const data = await provider.getBlockNumber()
	console.log("Data is ", data)
}

const trial2 = async () => {
	const provider = new ethers.providers.Web3Provider(
		(window as any).ethereum,
		"any"
	)
	await provider.send("eth_requestAccounts", [])
	const signer = provider.getSigner()
	console.log("Account:", await signer.getAddress())
}

function App() {
	useEffect(() => {
		//     const provider = new ethers.providers.JsonRpcProvider();
		//     console.log("Provider is ",provider)
		// // The provider also allows signing transactions to
		// // send ether and pay to change state within the blockchain.
		// // For this, we need the account signer...
		//     const signer = provider.getSigner()
		//     trial(provider);
		// trial2();
	}, [])

	return (
		<>
			<Navbar />
			{/* <div
				style={{
					marginTop: "150px",
				}}
			></div> */}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	)
}

export default App
