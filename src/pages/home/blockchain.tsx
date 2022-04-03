import { ethers } from "ethers"
import React, { useEffect } from "react"
import { Button } from "../../components/button"
import { Navbar } from "../../components/navbar"
import { Body, H1, H2 } from "../../components/typography"
import { styled } from "../../config/stitches"
import { Article } from "./article"
import ArticleContract from "../../contracts/Article.json";
import { create } from "ipfs-http-client"

export async function initialize(hash:string, title: string, author: string, abstract: string){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.addArticle(hash,title,abstract,author,"");

}

export async function getArticles(){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.getAllArticles();

    return tx

}

export async function upvote(hash: string){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.upvote(hash);

    return tx

}

export async function downvote(hash: string){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.downvote(hash);

    return tx

}


export async function getVotes(hash: string){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.getVotes(hash);

    return tx

}

export async function getTitle(hash: string){


    const provider = new ethers.providers.Web3Provider((window as any).ethereum)


    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const abi = ArticleContract.abi;
    const addr = '0xE0793598E4F57501720e27435497755893268eD2';
    const contract = new ethers.Contract(addr, abi, provider);
    const contract_rw = new ethers.Contract(addr, abi, signer);
 
    let tx = await contract_rw.getTitle(hash);

    return tx

}


export function Blockchain() {

	return (
		<>
			<Navbar />
			<HomeSection>
				<H1
					css={{
						marginBottom: "1rem",
					}}
				>
					Credible Objective News
				</H1>
				<Body
					css={{
						textAlign: "center",
					}}
				>
					Making unbiased quality journalism the new norm
				</Body>
				<div
					style={{
						display: "flex",
						margin: "1rem 0",
					}}
				>
					<Button
						css={{
							marginRight: "1rem",
						}}
					>
						Watch Video
					</Button>
					<Button variant="secondary">Learn More</Button>
				</div>
			</HomeSection>
			<ArticleSections>
				
			</ArticleSections>
		</>
	)
}

const HomeSection = styled("section", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: 1200,
	marginLeft: "auto",
	marginRight: "auto",
	minHeight: "100vh",
})

const ArticleSections = styled("section", {
	width: "100%",
	maxWidth: 1200,
	marginLeft: "auto",
	marginRight: "auto",
})
