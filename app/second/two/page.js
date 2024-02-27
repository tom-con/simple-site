"use client"
export default function Second() {
	return (
		<div
			className="text-4xl text-green-500"
			onClick={() => console.log("I've been clicked")}
			onMouseEnter={() => console.log("It's here")}
			onMouseLeave={() => console.log("It's gone")}
		>
			THIS IS MY PAGE PART TWO
		</div>
	)
}