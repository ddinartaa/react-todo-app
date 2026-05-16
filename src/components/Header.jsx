import logo from "../assets/images/logo.jpg"
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {

  return (
    <header>
      <nav>
        <Link to='/'>Задачи</Link> | <Link to='/about'>О приложении</Link>
      </nav>
    </header>
  );
}

export default Header;