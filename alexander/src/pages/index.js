import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/componentes/card/Card'
import Perfil from '@/componentes/perfil/Perfil'
import BoxCard from '@/componentes/box/BoxCard'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander-Arvelo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
     
       
      <Perfil
      name='Edith'
      text='let`s make this day productive'
      />
     
       <BoxCard/>
      </main>
    </>
  )
}
      {/* <Card img='https://quiz-7.com/media/basketball.png'
      tittle='Basketball'
      text='50 requestion'
      /> */}