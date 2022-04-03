import { styled } from "../config/stitches"
import React from "react"
import { Button } from "./button"
import { MagnifyingGlass } from "phosphor-react"

export function Navbar() {
	return (
		<NavbarContainer>
			<NavbarInnerContainer>
				<Logo>News</Logo>
				<Button css={{
					marginLeft: "auto",
					marginRight: "1rem",
				}} variant="secondary">
					<MagnifyingGlass weight="bold" />
				</Button>
				<Button>Connect MetaMask</Button>
			</NavbarInnerContainer>
		</NavbarContainer>
	)
}

const NavbarContainer = styled("div", {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	padding: "20px 0",
	zIndex: 999,
})

const NavbarInnerContainer = styled("div", {
	display: "flex",
	alignItems: "center",
	maxWidth: "1200px",
	margin: "0 auto",
	padding: 20,
	boxShadow: "0 0 0 2px $colors$primary",
	borderRadius: 10,
	background: "white",
})

const Logo = styled("div", {
	fontSize: "1.5rem",
	fontWeight: "bold",
	fontFamily: "Anybody, sans-serif",
})
