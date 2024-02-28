"use client"

import { useEffect, useState } from "react"

function someDataRequest(artist, songName) {
	return new Promise((resolve) => {
		console.log("REQUESTING DATA")
		setTimeout(() => {
			resolve({
				artist: artist,
				songName: songName,
				likes: 50000
			})
		}, 3000)
	})
}


export default function Second() {
	const [artist, setArtist] = useState("")
	const [songName, setSongName] = useState("")

	useEffect(() => {
		async function getData() {
			const res = await someDataRequest(artist, songName)
			console.log(res)
			return res
		}

		getData()
	}, [artist, songName])



	return (
		<div className="text-4xl">
			<input
				className="text-black"
				onChange={(event) => setArtist(event.target.value)}
				type="text"
			/>
			<input
				className="text-black"
				onChange={(event) => setSongName(event.target.value)}
				type="text"
			/>
			<div className="text-white text-4xl">{artist} - {songName}</div>
		</div>
	)
}