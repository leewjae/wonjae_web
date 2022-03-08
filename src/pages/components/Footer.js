import React from "react";
import "../css/footer.css"
import {Grommet, Footer as Ft, Text, Anchor} from "grommet"

const Footer = () => {
    return (
        <Ft background="brand" pad="medium">
        <Text>Copyright</Text>
        <Anchor label="About" />
        </Ft>
    )
}

export default Footer