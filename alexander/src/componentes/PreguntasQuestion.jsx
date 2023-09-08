import styles from '@/styles/Home.module.css'
export default function PreguntasQuestion({pregunta}) {
  return (
    <div className={styles.box_pregunta}>
       
        <div>
            <div className={styles.box_pregunta_text}>
                {pregunta}
            </div>
        </div>
    </div>
  )
}
