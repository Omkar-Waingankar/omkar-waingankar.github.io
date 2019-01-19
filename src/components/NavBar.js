import React from "react"

function NavBar() {
	return (
		<div>
			<nav className="navbar">

			  <div className="container">

			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">Omkar</a>
			    </div>

			    <ul className="nav navbar-nav">
			      <li><a className="intro-scroll" href="#introduction">Introduction</a></li>
			      <li><a className="scroll_to" href="#experience">Experience</a></li>
			      <li><a className="scroll_to" href="#contact">Contact</a></li>
			    </ul>

			  </div>
			</nav>
		</div>
	)
}

export default NavBar