import React from "react"
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { H1, P } from "../../components/typography"
import { styled } from "../../config/stitches"

export function Article(props: {
	title: string
	content: string
	author: string
	image?: string
	id: string
}) {
	return (
		<Box
			css={{
				borderRadius: 10,
				boxShadow: "0 0 0 2px $colors$primary",
				padding: 20,
				marginBottom: "2rem",
			}}
			layout={"row"}
		>
			<Box
				css={{
					width: "66%",
				}}
			>
				<P
					css={{
						margin: 0,
					}}
				>
					by <b>{props.author}</b>
				</P>
				<ArticleHeading>{props.title}</ArticleHeading>
				<P>{props.content}</P>
				<Button
					css={{
						width: "max-content",
						marginTop: "auto",
					}}
					link={"/articles/" + props.id}
				>
					Read More
				</Button>
			</Box>
			<div
				style={{
					width: "33%",
				}}
			>
				{props.image && <ArticleImage src={props.image} />}
			</div>
		</Box>
	)
}

const ArticleHeading = styled("h3", {
	color: "$primary",
	fontSize: "2rem",
	marginBottom: "1rem",
	fontFamily: "Anybody, sans-serif",
})

const ArticleImage = styled("img", {
	width: "100%",
	height: "auto",
	float: "right",
	borderRadius: 10,
})
