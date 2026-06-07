import { Link } from 'react-router-dom'
import { Socials } from './Socials'

const PRACTICES = ['Strategy', 'Design', 'Develop', 'Deliver']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <img src="/bst-logo.png" alt="" />
              <span>Bloomskill Tech</span>
            </Link>
            <p className="footer-blurb">
              A digital product studio in Salem. One team from strategy to shipped product —
              no handoffs.
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>The 4D framework</h4>
            {PRACTICES.map((p) => (
              <Link key={p} to="/services">
                {p}
              </Link>
            ))}
          </div>
        </div>
        <div className="fbot">
          <span>© {year} Bloomskill Tech — all rights reserved.</span>
          <Socials />
        </div>
      </div>
    </footer>
  )
}
