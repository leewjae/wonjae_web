import React from "react";
import "../css/footer.css"
import {Grommet, Footer as Ft, Text, Anchor} from "grommet"

const Footer = () => {
    return (
        // <div className = "footer">
        //     <a href="" target= "_blank">
        //         <img className = "contact-icon" src={require('../img/facebook-black.png').default} alt = ""/>   
        //     </a>
        //     <img className = "contact-icon" src={require('../img/instagram-black.png').default} alt = ""/>
        //     <img className = "contact-icon" src={require('../img/linkedin-black.png').default} alt = ""/>
        //     <img className = "contact-icon" src={require('../img/twitter-withoutbackground.png').default} alt = ""/>
        // </div>
        <Ft background="brand" pad="medium">
        <Text>Copyright</Text>
        <Anchor label="About" />
        <Anchor label="fdafafda" />

        </Ft>
    )
}

export default Footer