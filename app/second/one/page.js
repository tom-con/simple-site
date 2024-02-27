export default function Second() {
	const myArr = [
		{
			some: {
				thing: [1, 2, 3, 4]
			}
		},
		{
			some: {
				thing: [5, 6, 7, 8]
			}
		},
		{
			some: {
				thing: [9, 10, 11, 12]
			}
		},
		{
			some: {
				thing: [13, 14, 15, 16]
			}
		}
	]



	return (
		<div className="text-4xl">
			{myArr.map((obj) => {
				return (
					<div className="border-2 border-red-300">
						{obj.some.thing.map((num) => {
							return (
								<div className="bg-blue-400">{num}</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}