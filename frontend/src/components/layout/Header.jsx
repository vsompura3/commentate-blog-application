const navItems = [
  { idx: 0, linkTitle: 'Login', path: '' },
  { idx: 1, linkTitle: 'Register', path: '' },
]

const Link = ({ children, href }) => {
  return (
    <a
      href={href}
      className="rounded px-4 py-2 text-lg focus-within:bg-slate-700 focus-within:text-white focus-within:outline-offset-2 hover:bg-slate-700 hover:text-white"
    >
      {children}
    </a>
  )
}

const Header = () => {
  return (
    <header className="p-8 text-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="text-3xl font-black text-teal-800">
          Commentate
        </a>
        <ul className="flex items-center gap-4">
          {navItems.map(({ idx, linkTitle, path }) => (
            <li key={idx}>
              <Link href={path}>{linkTitle}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
