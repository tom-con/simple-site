import Article from "./components/article"

const articleTitle = 'Sherab says "Good Morning, Free Money For Everyone!"'
const articleParagraphs = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.",
	"Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.",
	"Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales."
]

export default function Home() {
	return (
		<>
			<Article
				title={articleTitle}
				paragraphs={articleParagraphs}
			/>
			<h1 className="text-5xl text-center py-8">
				Scientists say water falling from sky is normal
			</h1>
			<p className="pb-2 px-16">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus magna quis odio congue dignissim. Donec placerat dapibus varius. Aenean vel augue eget neque hendrerit faucibus. Curabitur gravida tristique lectus ac varius. Fusce turpis urna, luctus vel gravida sit amet, consequat eu turpis. Praesent ut rutrum massa. Donec luctus, leo eget viverra scelerisque, lectus velit rhoncus justo, eu sollicitudin purus lectus malesuada leo. Morbi varius bibendum commodo. Duis dapibus dolor sagittis orci dignissim, eu rutrum ex euismod.
			</p>
			<p className="pb-2 px-16">
				Sed sagittis ipsum nisl, a placerat libero auctor ac. Mauris vulputate iaculis felis nec varius. Etiam nunc diam, efficitur vitae luctus eu, scelerisque vel elit. Phasellus id diam porttitor, suscipit dui eget, placerat libero. Integer imperdiet id nisl in pretium. Fusce hendrerit justo a leo viverra, eu tempor augue finibus. In hac habitasse platea dictumst.
			</p>
			<p className="pb-2 px-16">
				Etiam id eros varius, facilisis ante sit amet, egestas tortor. Nullam volutpat pharetra metus vel luctus. Integer et lectus dolor. Vestibulum fringilla rhoncus dignissim. Duis in diam ut neque vehicula lobortis a sed sem. Donec a felis elementum, consequat arcu a, eleifend nunc. Nunc lacinia nisl lacus, sit amet dignissim neque malesuada a. Proin imperdiet diam ut velit sollicitudin semper. Curabitur accumsan, quam ut feugiat aliquam, tortor mauris tincidunt turpis, vel pretium purus mi vel diam. Vestibulum faucibus enim accumsan nulla porttitor, eu gravida risus laoreet. Nullam laoreet nisl sit amet elit fermentum sodales.
			</p>
		</>
	)
}

