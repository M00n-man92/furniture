import { FacebookOutlined, Instagram, LocationCity, Mail, Phone, Room, Twitter, Telegram } from '@mui/icons-material'
import './footer.scss'
import { Link } from 'react-router-dom'
// import {   } from '@fortawesome/fontawesome-free-solid'
export default function Footer() {
	const dropzoneStyle = (isPreview, notpreview) => ({

		width: (isPreview),
		height: (notpreview)


	});
	return (

		<div className="footer">
			<div className="left">
				<div className="title">
					<span>Super Great sales Furniture.</span>
				</div>
				<div className="discrip">
					<p>Great products. And the smell of old wood.</p>
				</div>
				<div className="social">
					<div className="container" >
						<a href="https://www.google.com" className='link'>
							<img src='/assets/Tiktok-icon-on-transparent-background-PNG.png' ></img>
						</a>

					</div>
					<div className="container">
						<a href="https://www.google.com" className='link'><Instagram style={dropzoneStyle(20, 20)} /></a>
					</div>
					<div className="container">
						<a href="https://www.google.com" className='link'> <Telegram style={dropzoneStyle(20, 20)} /></a>
					</div>
				</div>
			</div>
			<div className="center">
				<div className="title">
					<h3 > Links</h3>
				</div>

				<ul>

					<li>

						Home
					</li>

					<li>

						Cart

					</li>
					<li>

						Bedroom

					</li>
					<li>

						Livingroom

					</li>
					<li>

						Accessories

					</li>
				</ul>

			</div>
			<div className="right">
				<div className="title">
					<h4>Contact.</h4>
				</div>
				<div className="container">
					<Phone style={dropzoneStyle(15, 15)} />    <h4>(+251) 0965633343</h4>
				</div>
				<div className="container">
					<Mail style={dropzoneStyle(15, 15)} />        <h4>email2dream2020@gmail.com</h4>

				</div>

				<div className="container">
					<Room style={dropzoneStyle(15, 15)} />     <h4>   Ethiopia, Addis Ababa around Bole</h4>
				</div>

			</div>

		</div>
	)
}
