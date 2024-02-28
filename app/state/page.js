"use client"

import { useState } from "react"

export default function State() {
	const [word, setWord] = useState("Hello")
	// var word = "Hello" // Using a regular variable like this won't work for dynamic content
	return (
		<div>
			<p className="text-4xl">{word}</p>
			<input
				className="text-black text-4xl"
				type="text"
				// onChange={(event) => word = event.target.value}
				onChange={(event) => setWord(event.target.value)}
			/>
		</div>
	)
}