import React from "react"
import prof from "./web_prof_pic.JPG"

function Introduction() {

	return (
		<div className="intro">
			<div className="container">
				<h1 id="introduction" className="hideme">Introduction</h1>
				<h2 className="hideme">A little bit about myself</h2>
				<div className="row">
					<div className="col-md-5 fill hideme">
						<img className="prof" src={prof} alt="picture of me"/>
					</div>
					<div className="col-md-7 hideme">
						<p>Hi! My name is Omkar Waingankar and {"I'm"} a second-year at the University of California, Berkeley majoring {"in"} Electrical
						Engineering {"&"} Computer Science. My interests lie {"in"} web development and data analytics, and I keep myself busy {"with "} 
						<a className="work-link" href="https://goodlylabs.org">research</a>, 
						<a className="work-link" href="https://susa.berkeley.edu/dataconsulting"> consulting</a>, 
						<a className="work-link" href="https://csmberkeley.github.io"> tutoring</a> (currently on hold), classwork, and occasionally being
						a nuisance to my housemates.</p>
						<p>{"Outside of working and studying, I like to fill up my free time with the people that matter most in my life. \
						Whether that means spending a Saturday cheering on our golden bears or enjoying some of California's natural splendor, \
						I'm always excited for wherever our adventures take us."}</p>
						<p>{"This website was created partly as an attempt at outrun-themed graphic design, partly to finally get my own domain, and \
						partly to showcase some of my work."}</p>
						<p>If {"you're"} looking {"for"} a professional description of me, {"I've"} linked my resume <a className="work-link" href="./resume.pdf">here</a>.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Introduction