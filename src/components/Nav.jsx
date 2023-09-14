import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
        <ul>
            <li>
                <Link to='/PS-Module2Project/' style={{color: 'white', textDecoration: 'none'}}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/help' style={{color: 'white', textDecoration: 'none'}}>
                    Contact
                </Link>
            </li>   
            <li>
                <Link to='/checkout' style={{color: 'white', textDecoration: 'none', fontSize: '25px'}}>
                    🛒
                </Link>
            </li>
        </ul>
    </div>
  )
}
