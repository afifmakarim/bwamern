import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Header from "parts/Header"
import PageDetailTitle from "parts/PageDetailTitle"
import FeaturedImage from "parts/FeaturedImage"
import PageDetailDescription from "parts/PageDetailsDescription"
import BookingForm from "parts/BookingForm"
import Categories from "parts/Categories"
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import ItemDetails from "json/itemDetails.json"

export default class DetailsPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }
    
    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];

        return (
           <>
           <Header {...this.props}></Header>
           <PageDetailTitle
                breadcrumb={breadcrumbList}
                data={ItemDetails}
            ></PageDetailTitle>
            <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <Fade bottom>
                            <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                        </Fade>
                    </div>
                    <div className="col-5">
                        <Fade bottom>
                            <BookingForm itemDetails={ItemDetails} ></BookingForm>
                        </Fade>
                    </div>
                </div>
            </section>
            <Categories data={ItemDetails.categories}></Categories>
            <Testimony data={ItemDetails.testimonial}></Testimony>
            <Footer/>
           </>
        )
    }
}
