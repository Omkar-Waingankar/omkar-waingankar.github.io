import React from "react"

function PortfolioItem(props) {
	return (
		<div className="portfolio-item">
			<h4 className="item-title">{props.title}</h4>
			<div className="subs">
				<h5 className="item-sub"><b>Timeline:</b> {props.time}</h5>
				<h5 className="item-sub" style={{display: props.live ? "block" : "none"}}><b>Live:</b> <a href={props.live}>{props.live}</a></h5>
				<h5 className="item-sub" style={{display: props.github ? "block" : "none"}}><b>Github:</b> <a href={props.github}>{props.github}</a></h5>
				<h5 className="item-sub"><b>Technologies:</b> {props.tech}</h5>
			</div>
			<p className="item-desc">{props.description}</p>
		</div>
	)
}

export default PortfolioItem