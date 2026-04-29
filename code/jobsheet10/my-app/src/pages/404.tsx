import styles from '../styles/404.module.scss';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={styles.error}>   
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <img src="../page-not-found.png" alt="404" className={styles.image}/>
        <p>maaf, Halaman yang Anda cari tidak ada.</p>
        <Link href="/" className={styles.link}>Kembali ke Beranda</Link>
    </div>
  )
}
export default Custom404;