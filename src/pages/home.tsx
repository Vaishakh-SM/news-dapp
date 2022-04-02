import React from "react"
import { Button } from "../components/button"
import { Body, H1, H2 } from "../components/typography"
import { styled } from "../config/stitches"
import map from "../images/press-freedom-ranking-2020-1200px.jpg"

export function Home() {
	return (
		<>
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
				<div style={{
					display: "flex",
					margin: "1rem 0",
				}}>
					<Button css={{
						marginRight: "1rem",
					}}>Watch Video</Button>
					<Button variant="secondary">Learn More</Button>
				</div>
			</HomeSection>
			<div
				style={{
					width: "100%",
					maxWidth: 1200,
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<H2>Just In</H2>
			</div>
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
	minHeight: "calc(100vh)",
})
