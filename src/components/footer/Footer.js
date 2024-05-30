import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://www.instagram.com/vlad_shcherbina_0.5/">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/VladShcherbina?tab=repositories">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2024 frontend-dev</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;