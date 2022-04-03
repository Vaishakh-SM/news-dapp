import React, { useEffect, useState } from "react"
import { Button } from "../../components/button"
import { Navbar } from "../../components/navbar"
import { Body, H1, H2 } from "../../components/typography"
import { styled } from "../../config/stitches"
import map from "../images/press-freedom-ranking-2020-1200px.jpg"
import { Article } from "./article"
import { getArticles } from "./blockchain"

export function Home() {
	const[arr, setArr] = useState<any>([]);

	useEffect(()=>{
		getArticles().then((result)=>{
			setArr(result);
		})
	},[])

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
				<H2>Just In</H2>
				{arr.map((x:any)=>{
					return(<Article
						title={x.title}
						author={x.authorName}
						content={x.description}
						image={
							"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
						}
						id={x.ipfsHash}
						key={x.ipfsHash}
					/>)
				})}
				
				
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
