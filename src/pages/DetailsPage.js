import React, { Component } from 'react'

import Header from "parts/Header"
import PageDetailTitle from "parts/PageDetailTitle"

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
           </>
        )
    }
}
