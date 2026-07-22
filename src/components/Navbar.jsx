import {navLinks} from '../../constants/index'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
            <a href="#home" className="flex flex-conter gap-2">
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#{link.id}`}> {link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
