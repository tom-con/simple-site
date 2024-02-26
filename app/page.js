const BASE_URL = "https://shrtlnk.dev/api/v2/link"
const API_KEY = process.env.API_KEY

const urlToShorten = {
	url: "https://www.t3bhutan.com"
}

async function getData() {
	const res = await fetch(BASE_URL, {
		method: "POST",
		headers: {
			"api-key": API_KEY,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(urlToShorten)
	})

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<div className="text-4xl text-white">
			{/* {data.amount} */}
		</div>
	)
}

