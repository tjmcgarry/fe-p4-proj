function NavBar({currentUser, displayPost, display}){




  return(
    <nav>
    <ul className="NavBar">
    <li> <a>Home</a></li>
    <li> <a onClick={displayPost}>Add A Book</a></li>
    <li> <a onClick={display}>Search For Book</a></li>
    <li> <a>Coming Soon</a></li>
    <li className="right"> <a href="/login">Logged In As {currentUser.username} </a></li>
    </ul>



    </nav>
  )
}

export default NavBar;