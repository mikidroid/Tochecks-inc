import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";
import ProjectList from "../../../config/project-list"



class Portfolio extends Component{
    render(){
        let title = 'Projects & Gallary',
        description = 'No One Has More Experience Or Expertise To Help You Than An Agent Who Is A Realtor.';
        return(
            <React.Fragment>
                <div id="portfolio" className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {ProjectList.map((value , index) => (                   <a href={'/portfolio-details/'+index}>
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href={'/portfolio-details/'+index}>{value.title}</a></h4>

                                        </div>
                                    </div>
                                    <Link className="link-overlay" to={'/portfolio-details/'+index}></Link>
                                </div></a>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;