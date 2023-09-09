import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
        <ul>
            <li>
                <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/checkout' style={{color: 'white', textDecoration: 'none'}}>
                    Check Out 🛒
                </Link>
            </li>
            <li>
                <Link to='/help' style={{color: 'white', textDecoration: 'none'}}>
                    Help
                </Link>
            </li>   
        </ul>
    </div>
  )
}
