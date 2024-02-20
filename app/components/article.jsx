export default function Article({ title, paragraphs }) {
	return (
		<>
			<h1 className="text-5xl text-center py-8">
				{title}
			</h1>
			{paragraphs.map((paragraph) => {
				return (
					<p className="pb-2 px-16">
						{paragraph}
					</p>
				)
			})}
		</>
	)
}