import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Card({img,tittle,text,id}) {
  return (
<Link  href={`/${id}`}>
<div className={styles.Card}>
           
           <div className={styles.card_img}>
               <img src={`https://quiz-7.com${img}`} alt="" className={styles.card_img_photo}  />
           
           </div>
           <div className={styles.card_tittle}>
             <h4 className={styles.card_tittle_name}>{tittle}</h4>
           </div>
           <div className={styles.card_text}>
              <p className={styles.card_text_name}>{text} questions</p>
           </div>
           
       </div>
</Link>
  
   
 
  )
}
