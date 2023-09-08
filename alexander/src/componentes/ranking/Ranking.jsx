import styles from '@/styles/Home.module.css'



export default function Ranking() {
  return (
    <div className={styles.container_ranking}>
       <div className={styles.container_ranking_box}>
        <img src="https://www.svgrepo.com/show/422999/trophy-prize-achievement.svg" width='35px' height='35px' alt="basketball" className={styles.container_ranking_img}  />
        <div className={styles.container_ranking_text}>
            <h3>Raking</h3>
            <h4>2390</h4>
        </div>

        </div> 
        <div className={styles.container_ranking_box}>
            <img src='https://www.svgrepo.com/show/234310/money-coin.svg' width='35px' height='35px' alt="basketball" className={styles.container_ranking_img}   />
        <div className={styles.container_ranking_text}>
            <h3>Points</h3>
            <h4>1495</h4>
        </div>
        

        </div>
    </div>
  )
}
