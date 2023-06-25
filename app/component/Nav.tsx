
import Link from 'next/link'
export default function Nav() {
    return (
        <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    )
  }
  