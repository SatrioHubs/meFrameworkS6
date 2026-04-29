import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import style from './profile.module.scss';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={style.profile}>
        <Head>
          <title>Profile saya</title>
        </Head>
        <img src="./foto-gondrong.jpg" alt="Profile" className={style.profile__image} />
        <h1>Saya Satrio Ahmad Ramadhani dan saya pernah gondrong</h1><br />
        <p>Mahasiswa D4 Pengembangan Web</p>
      </div>
    </>
  )
}