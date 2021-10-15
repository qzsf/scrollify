import React from "react";

const Section1 = () => {
    
    return (
        <section className="panel home" data-section-name="home">
			<div className="inner">
        <div className="header-content">
          <h1>Apple Scrollify Example</h1>

					<p><a href="/scrollify#examples" className="arrow">See more examples</a></p>
        </div>
        <div className="gallery0"><img src="/img/hero_mba_11.jpeg" /></div>
			</div>
			<ul className="pagination">
				<li><a href="#home" className="active"><span className="hover-text">Home</span></a></li>
				<li><a href="#design"><span className="hover-text">Design</span></a></li>
				<li><a href="#features"><span className="hover-text">Features</span></a></li>
				<li><a href="#ios7"><span className="hover-text">iOS7</span></a></li>
			</ul>
		</section>
    );
}

export default Section1