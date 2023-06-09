import { NavLink } from 'react-router-dom'
import { projects } from '../../../helpers/projects/ProjectsList'
import styles from './ProjectsCars.module.scss'
import Projects from './component/Projects'

const ProjectsCars = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.container}>
					<h1 className={styles.label}>Penguin Family Cakes</h1>
					<div className={styles.cards}>
						{projects.map((project, index) => {
							return (
								<Projects
									key={index}
									title={project.title}
									img={project.img}
									price={project.price}
									index={index}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default ProjectsCars
