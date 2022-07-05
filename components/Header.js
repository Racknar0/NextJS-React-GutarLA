import Link from "next/link"


const Header = () => {
  return (
    <header>
      <div className="conttenedor">
        <div>

        </div>
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Nosotros</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Tienda</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
