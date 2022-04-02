import { styled } from "../config/stitches"
import React from "react"
import { CSS } from "@stitches/react"

export function Button(props: {
	children: React.ReactNode
	variant?: "primary" | "secondary",
	css?: CSS,
}) {
	return (
		<ButtonContainer variant={props?.variant ?? "primary"} css={props.css}>
			{props.children}
		</ButtonContainer>
	)
}

const ButtonContainer = styled("button", {
	appearance: "none",
	borderRadius: "15px",
	boxSizing: "border-box",
	cursor: "pointer",
	display: "inline-block",
	fontFamily: "Anybody, sans-serif",
	fontSize: "16px",
	fontWeight: "600",
	lineHeight: "normal",
	margin: "0",
	minHeight: "60px",
	minWidth: "0",
	outline: "none",
	padding: "16px 30px",
	textAlign: "center",
	textDecoration: "none",
	transition: "all 300ms cubic-bezier(.23, 1, 0.32, 1)",
	userSelect: "none",
	"-webkit-user-select": "none",
	touchAction: "manipulation",
	willChange: "transform",

	"&:hover": {
		boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
		transform: "translateY(-2px)",
	},

	"&:active": {
		boxShadow: "none",
		transform: "translateY(0)",
	},

	variants: {
		variant: {
			primary: {
				color: "$text",
				backgroundColor: "$primary",
			},
			secondary: {
				color: "$primary",
				backgroundColor: "$text",
				border: "none"
			},
		},
	},
})
