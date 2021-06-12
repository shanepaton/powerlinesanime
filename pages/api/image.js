export default async (req, res) => {
	await fetch('https://powerlines.racks.ninja')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			res.status(200).json({ url: data.url, width: data.width, height: data.height })
		});
}

