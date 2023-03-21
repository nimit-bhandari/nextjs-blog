import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;