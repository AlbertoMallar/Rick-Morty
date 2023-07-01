import styles from '../About/About.module.css'
import { NavLink } from "react-router-dom";

export default function About(){
    return(
        <div className={styles.containerAbout}>
            <NavLink className={styles.links} to={'./Home'}
            >Back</NavLink>
            <h1 className={styles.appWords}>Programar se vuelve un arte y, quizás, el eje vital de una persona, cuando logra resaltar, por un lado, el niño interior que llevamos dentro. Un niño lleno de imaginación y sueños, cuyas ideas son alimentadas por la ilusión del futuro y los libros de ciencia ficción que moldearon (supuestamente) inocentes ideas que, en algunos casos, fueron superadas por la propia realidad..
            Y por otro lado, el adulto. Con ansias de desafíos, ansias de crear algo grande,  de sentir esa adrenalina de la competencia sana y de la superación personal en cada momento. El niño y el adulto, ésta vez, pueden jugar juntos...".</h1>
            <h2 className={styles.signature}>Sitio creado por Alberto Mallar</h2>
            <h3 className={styles.signature}>Con la ayuda de los compañeros y la comunidad de Henry</h3>
        </div>
    )
}