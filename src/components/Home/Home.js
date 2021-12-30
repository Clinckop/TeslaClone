import React from 'react'
import styled from "styled-components"
import Section from '../Section/Section'
import Header from '../Header/Header'

function Home() {
    return (
        <Container>
            <Header/>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg= 'model-s.jpg'
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg= 'model-y.jpg'
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg= 'model-3.jpg'
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg= 'model-x.jpg'
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Moneyback guarantee"
                backgroundImg= 'solar-panel.jpg'
                leftBtnText="Order now"
                rightBtnText="Learn more"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Solar For New Roofs"
                description="Solar Roof Costs Less Than a New Roof PLus Solar Panels"
                backgroundImg= 'solar-roof.jpg'
                leftBtnText="Order now"
                rightBtnText="Learn more"
                // style={{"scroll-snap-align": "start"}}
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg= 'accessories.jpg'
                leftBtnText="Shop now"
                // style={{"scroll-snap-align": "start"}}
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    color:red;
    width:100%;
    // scroll-snap-type: y mandatory;
    // overflow-y: scroll;
`