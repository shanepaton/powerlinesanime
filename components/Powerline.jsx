import { Component } from 'react'
import Image from 'next/image'

const powerlinesLoader = ({ src }) => {
	return `https://powerlines.racks.ninja/${src}`
}

export default class Powerline extends Component {

	constructor(props) {
		super(props);
		this.state = {
			img: '',
			id: '0',
			width: 0,
			height: 0
		};
	}

	componentDidMount() {
		fetch('/api/image')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					img: data.url,
					width: data.width,
					height: data.height,
					id: data.url.replace('https://powerlines.racks.ninja/', '')
				})
			});
	}

	render() {
		return (
			<div>
				<Image loader={powerlinesLoader} width={this.state.width} height={this.state.height} src={this.state.id} />
			</div>
		)
	}
}
