"use client"

import { useState } from "react"

export default function Home() {
	const [quotes, setQuotes] = useState([])
	const [text, setText] = useState("Hello")

	return (
		<div className="mx-auto w-fit mt-80">
			<div className="text-4xl text-red-500 text-center">
				{quotes.map((quote) => {
					return (
						<p class>
							{quote}
						</p>
					)
				})}
			</div>
			<div className="text-8xl text-green-500 text-center mt-12">
				{text}
			</div>
			<input
				className="text-2xl text-black mt-12"
				type="text"
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				className="text-2xl ml-8 font-bold border-4 px-2 border-white rounded"
				onClick={() => {
					const newQuotes = quotes.concat([text])
					setQuotes(newQuotes)
					setText("")
				}}
			>
				Save Text
			</button>
		</div>
	)
}