import React from "react"
import PortfolioItem from "./PortfolioItem.js"

function Portfolio() {
	return (
		<div className="portfolio" id="experience">
			<div className="container">
					<h1>Experience</h1>
					<h2>Tackling meaningful problems</h2>
					<h3>Below is a {"short"} list of some the projects {"I've"} worked on {"in"} the past year or so. Even as a freshman, 
					{" I've"} had opportunities to make an immediate impact on the campus and world around me.</h3>
					<div className="portfolio-items">
						<PortfolioItem 
					        title="Searchlight"
					        time="January 2018 - December 2018"
					        live="http://searchlight.goodlylabs.org" 
					        github="https://github.com/Omkar-Waingankar/Searchlight" 
					        tech="Pandas, BeautifulSoup4, AWS, SQL, Flask" 
					        description="Our group, Liberating Archives, gathers, parses, and publicly shares digital archives that are currently inaccessible for research purposes, 
					        and draw insights from them to further social good. As an undergraduate researcher, I jumped in a matter of weeks from finishing UC-Berkeley's 
					        introductory computer science course to amassing extensive experience web scraping 14 GB of text files from the Daily Congressional Record, 
					        cleaning, parsing, and loading one million distinct speeches into a textual database, managing cloud-related issues of scale with AWS, and 
					        designing a full-stack web app in Flask to host our “liberated” dataset." />
					    <PortfolioItem 
					        title="INFORMS" 
					        time="September 2018 - January 2019"
					        tech="Pandas, Tableau, MOSEK" 
					        description="I competed in the INFORMS O.R. & Analytics Student Team Competition through the SUSA's
					        Data Consulting committee. As a consultant, I helped General Motors 
					        look into the future and analyze how autonomous vehicles may change the finished vehicle delivery process. The case study centers on 
					        architecting an adaptable delivery network consisting of routing for each plant-dealer-vehicle combination. After visualizing and exploring
					        the datasets given to us, we concluded the best approach would be to frame the problem as an integer linear program; to increase the computational feasibility
					        of this continuous optimization task, we used clustering to group dealerships and create smaller sub-problems. Our first round submission is in 
					        January 2019, and we'll hear more about our progress later in the spring." />
					    <PortfolioItem 
					        title="CalSTAR"
					        time="May 2018 - August 2018"
					        live="https://stars.berkeley.edu"
					        github="https://github.com/calstar/CalSTARWebsite" 
					        tech="HTML/CSS, Javascript"
					        description="Shortly after mastering the basics of HTML/CSS and Rails in under two weeks to restructure the website of another on-campus organization, Innovate Berkeley, 
					        CalSTAR approached me with the desire to recreate their website from scratch to better convey their mission to future members and sponsors. 
					      	I enthusiastically seized this opportunity, and outside my research, this was my first experience leading a team of developers and graphic designers to completely rehaul an entire website.
					      	Since the project was largely completed over the summer, we were presented with a unique set of challenges as a team trying to meet a production deadline despite
					      	our inability to meet in-person, but that only made its eventual completion even more gratifying." />
					</div>
			</div>
		</div>
	)
}

export default Portfolio