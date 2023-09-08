import styles from '@/styles/Home.module.css'
import Ranking from '../ranking/Ranking'

export default function Perfil({name,text}) {
  return (
    <><div className={styles.container_perfil}>
      <div className={styles.container_perfil_texto}>
        <div className={styles.container_perfil_texto_text}>
          <h3>HI,</h3>
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.container_perfil_texto_parr}>

        </div>




      </div>

      <div className={styles.container_perfil_img}>
        <img src='https://www.svgrepo.com/show/159/joyful.svg' width='35px' height='35px' alt="basketball" className={styles.container_perfil_img_photo} />
      </div>
    </div><Ranking /></>
  )
}

