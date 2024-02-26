const BASE_URL = "https://api.coinranking.com/v2"
const API_KEY = process.env.API_KEY

async function getData() {
	const res = await fetch(BASE_URL + "/coin/Qwsogvtv82FCd", {
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': API_KEY,
		},
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

