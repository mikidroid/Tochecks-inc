import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
         let btn = 'btn btn-danger'
        let title = 'Overview',
        description = 'Nwankwo Tochukwu enjoys volunteerism and Humanitarian activity which are some of the characteristics of a true Rotarian. An Animal scientist by training and Real estate by practice.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title"><b>Biography</b></h3>
                                                    <p><b>ROTN. NWANKWO TOCHUKWU IHEAKAM (MD)</b> was born on 1st of September 1980 in Okpanku Amumara in Ezinihitte Mbaise L.G.A of Imo State.</p><p>
He had his early education at shell camp primary school, Owerri, and proceeded for his secondary education at government secondary school Owerri.
</p>
                                                </div>
                                            </div>
<div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title"><b>Accomplishments & Experience</b></h3>
                                                    <p>He is the Chairman of Planet-Next Intermedium Limited. An Indigenous real estate company, and a major player/active competitor in the industry.</p><p>
He is also the Managing Director of Tochecks Integrated Services limited: Investment Estate Management/sales, a facility management company here in Abuja F.C.T.</p><p>
He is also the MD/CEO Diamond Toin, a Hospitality Management Company
He joined Rotary International family as a charter member of Rotary Club of Abuja municipal in district 9125.</p> <p>He has served as Director international services, President of the club 1999/2020, Rotary year, A Major Donor of the club and currently An Assistant Governor in the District.
</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 mt--20 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h3 className={`title ${btn}`}>Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your dream Home Now</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                <a className="rn-btn btn-white" href="/contact">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/finding-us-01.png" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}



                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                       <h2 className="title text-center mb--50">Client Testimonials</h2>
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About