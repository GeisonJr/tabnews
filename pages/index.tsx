/* Project */
import Container from '@components/Container'
import Logo from '@components/Logo'
import styles from './index.module.scss'

export default function UnderContruction() {
	return (
		<Container>
			<section className={styles.container}>
				<div className={styles.title}>
					<Logo />
					<h1>{'TabNews'}</h1>
				</div>
				<div className={styles.message}>
					<p>
						{
							'Essa página ainda está em construção e em breve estará disponível.'
						}
					</p>
				</div>
			</section>
		</Container>
	)
}
