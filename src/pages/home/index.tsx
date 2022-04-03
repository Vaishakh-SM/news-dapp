import React from "react"
import { Button } from "../../components/button"
import { Navbar } from "../../components/navbar"
import { Body, H1, H2 } from "../../components/typography"
import { styled } from "../../config/stitches"
import map from "../images/press-freedom-ranking-2020-1200px.jpg"
import { Article } from "./article"

export function Home() {
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
				<Article
					title="Lorem ipsum dolor sit amet."
					author="Lorem ipsum"
					content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore optio facilis fugiat expedita cumque debitis perspiciatis pariatur tempore recusandae?"
					image={
						"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
					}
					id="1234567890"
				/>
				<Article
					title="Lorem ipsum dolor sit amet."
					author="Lorem ipsum"
					content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore optio facilis fugiat expedita cumque debitis perspiciatis pariatur tempore recusandae?"
					image={
						"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
					}
					id="1234567890"
				/>
				<Article
					title="Lorem ipsum dolor sit amet."
					author="Lorem ipsum"
					content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore optio facilis fugiat expedita cumque debitis perspiciatis pariatur tempore recusandae?"
					image={
						"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
					}
					id="1234567890"
				/>
				<Article
					title="Lorem ipsum dolor sit amet."
					author="Lorem ipsum"
					content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore optio facilis fugiat expedita cumque debitis perspiciatis pariatur tempore recusandae?"
					image={
						"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
					}
					id="1234567890"
				/>
				<Article
					title="Lorem ipsum dolor sit amet."
					author="Lorem ipsum"
					content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore optio facilis fugiat expedita cumque debitis perspiciatis pariatur tempore recusandae?"
					image={
						"https://images.unsplash.com/photo-1648862141926-bd1b7467672f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
					}
					id="1234567890"
				/>
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
