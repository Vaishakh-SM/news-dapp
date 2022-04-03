import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { H1, P } from "../../components/typography"
import ImageExt from "@tiptap/extension-image"
import { create } from "ipfs-http-client"
import { TextHOne, TextHTwo, TextHThree, Image } from "phosphor-react"
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { downvote, getTitle, getVotes, initialize, upvote } from "../home/blockchain"

export function Article() {
	let params = useParams()
	const editor = useEditor({
		extensions: [StarterKit, ImageExt],
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
			},
		},
		content: null,
		editable: false,
	})
	const [votes, setVotes] = useState(0)
	const [title, setTitle] = useState("")

	useEffect(() => {
		fetch("https://ipfs.infura.io/ipfs/" + params.id).then((res) => {
			res.text().then((resu) => {
				editor!.commands.setContent(resu)
			})
		})
		getVotes(params.id!).then((res) => {
			setVotes(res.toNumber())
		})
		getTitle(params.id!).then((res) => {
			setTitle(res)
		})
	}, [editor])
	return (
		<Box css={{
			width: "100%",
			alignItems: "center"
		}}>
			<H1>{title}</H1>
			<EditorContent editor={editor} />
				<P>{votes} Votes</P>
			<Box layout={"row"}>
				<Button
					css={{
						marginLeft: 10,
						marginRight: 10,
					}}
					onClick={async () => {
						await upvote(params.id!)
					}}
				>
					Upvote
				</Button>
				<Button
					onClick={async () => {
						await downvote(params.id!)
					}}
					css={{
						marginRight: 10,
					}}
				>
					Downvote
				</Button>
			</Box>
		</Box>
	)
}
