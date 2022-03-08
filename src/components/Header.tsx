import '../styles/header.scss'

export function Header() {
  return (
		<header className='header'>
			<div>
				<img src='./logo.svg' alt='to.do' />
				<p>
					<a
						href='https://gilbertoaleite-portfolio.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Desenvolvido by: Gilberto A Leite
					</a>
				</p>
			</div>
		</header>
	);
}