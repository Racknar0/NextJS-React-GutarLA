import Link from "next/link"
import Image from 'next/image'

import styles from '../styles/Header.module.css'



const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
            <div>
                <Link href="/">
                    <Image width={400} height={100} src="/img/logo.svg" alt="imagen_logo" />
                </Link>
                
            </div>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Tienda</Link>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
