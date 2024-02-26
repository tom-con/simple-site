const BASE_URL = "https://www.amdoren.com/api/currency.php"
const API_KEY = process.env.API_KEY

const fromCurrency = "USD"
const toCurrency = "EUR"
const amount = "100"


async function getData() {
	const res = await fetch(BASE_URL + "?api_key=" + API_KEY + "&from=" + fromCurrency + "&to=" + toCurrency + "&amount=" + amount)

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
			{data.amount}
		</div>
	)
}

