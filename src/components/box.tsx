import { styled } from "../config/stitches"

export const Box = styled("div", {
	display: "flex",

	variants: {
		layout: {
			column: {
				flexDirection: "column",
			},
			row: {
				flexDirection: "row",
			},
		},
	},

	defaultVariants: {
		layout: "column",
	}
})
