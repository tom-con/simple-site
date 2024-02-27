export default function Article({ children, title, paragraphs, hasImage }) {
	if (hasImage) console.log("Showing an image")
	return (
		<>
			<h1 className="text-3xl px-4 md:px-0 md:text-5xl text-center py-8">
				{title}
				{children}
			</h1>
			{paragraphs.map((paragraph) => {
				return (
					<p className="pb-4 px-4 md:px-16 text-xl">
						{paragraph}
					</p>
				)
			})}
		</>
	)
}