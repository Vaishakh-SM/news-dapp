import { styled } from "../../config/stitches"
import { useEditor, EditorContent, BubbleMenu, Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import React, { useState } from "react"
import { Button } from "../../components/button"
import { Box } from "../../components/box"
import ImageExt from "@tiptap/extension-image"
import {
	Image,
	TextBolder,
	TextHOne,
	TextHThree,
	TextHTwo,
	TextItalic,
	TextStrikethrough,
} from "phosphor-react"
import { H1 } from "../../components/typography"

export const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, ImageExt],
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
			},
		},
		content: "<p>Start painting your <b>ART</b>icle here...</p>",
	})

	return (
		<>
			<H1 css={{
				margin: 20,
				marginBottom: 40
			}}>Draft a new Article</H1>
			<EditorContainer>
				<Box
					layout="row"
					css={{
						margin: "20px",
					}}
				>
					<Button
						css={{
							borderRadius: "15px 0 0 15px",
						}}
						onClick={() =>
							editor?.chain().focus().toggleHeading({ level: 1 }).run()
						}
					>
						<TextHOne />
					</Button>
					<Button
						css={{
							borderRadius: 0,
						}}
						onClick={() =>
							editor?.chain().focus().toggleHeading({ level: 2 }).run()
						}
					>
						<TextHTwo />
					</Button>
					<Button
						css={{
							borderRadius: "0 15px 15px 0",
							marginRight: 20,
						}}
						onClick={() =>
							editor?.chain().focus().toggleHeading({ level: 3 }).run()
						}
					>
						<TextHThree />
					</Button>
					<OptionsToolbar editor={editor} />
					<Button
						onClick={() => {
							const url = window.prompt("URL")
							if (url) {
								editor?.chain().focus().setImage({ src: url }).run()
							}
						}}
					>
						<Image />
					</Button>
				</Box>
				<EditorContent editor={editor} />
				<Button
					onClick={() => {
						console.log(editor?.getHTML())
					}}
					css={{
						width: "max-content",
						marginLeft: "auto",
						margin: "20px 20px 20px auto",
					}}
				>
					Submit
				</Button>
			</EditorContainer>
		</>
	)
}

const EditorContainer = styled("div", {
	boxShadow: "0 0 0 2px $colors$primary",
	margin: 20,
	borderRadius: 15,
	display: "flex",
	flexDirection: "column",
})

function OptionsToolbar(props: { editor: Editor | null }) {
	return (
		<Box layout="row">
			<Button
				onClick={() => props.editor?.chain().focus().toggleBold().run()}
				variant={props.editor?.isActive("bold") ? "primary" : "secondary"}
				css={{
					borderRadius: "15px 0 0 15px",
				}}
			>
				<TextBolder />
			</Button>
			<Button
				onClick={() => props.editor?.chain().focus().toggleItalic().run()}
				variant={props.editor?.isActive("italic") ? "primary" : "secondary"}
				css={{
					borderRadius: 0,
				}}
			>
				<TextItalic />
			</Button>
			<Button
				onClick={() => props.editor?.chain().focus().toggleStrike().run()}
				variant={props.editor?.isActive("strike") ? "primary" : "secondary"}
				css={{
					borderRadius: "0 15px 15px 0",
				}}
			>
				<TextStrikethrough />
			</Button>
		</Box>
	)
}
