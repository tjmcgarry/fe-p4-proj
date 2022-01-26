function NavBar({currentUser}){




  return(
    <nav>
    <ul className="NavBar">
    <li> <a>Home</a></li>
    <li> <a>Add A Book</a></li>
    <li> <a>About Us</a></li>
    <li> <a>Content C</a></li>
    <li className="right"> <a href="/login">Logged In As {currentUser.username} </a></li>
    </ul>



    </nav>
  )
}

export default NavBar;