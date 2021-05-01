import React from "react";
import "./css/home.css";
import Typed from "react-typed";
import {Row, Col} from "reactstrap";

const Home = () => {

    return (
        <>
        <div id = "Home">
            <div id = "center-wrapper">
                {/* <Typed id='Home-Typed' strings={['hello']}typeSpeed={200}></Typed> */}
                <h1>Application Status...</h1>
                <h2>GPA 4.0/4.0 </h2>
                <h2>Major: Computer Science</h2>
                <Row>
                    <Col>
                        <h4 className = "accepted"> UC Berkeley: Accepted </h4>
                        <h4 className = "waitlisted"> UCLA: Waitlisted </h4>
                        <h4 className = "accepted"> UC Irvine: Accepted </h4>
                        <h4 className = "accepted"> UC San Diego: Pending </h4>
                        <h4> Johns Hopkins University: Pending </h4>
                    </Col>

                    <Col>
                        <h4> Georgia Tech: Pending </h4>
                        <h4> MIT: Pending </h4>
                        <h4> Rice University: Pending </h4>
                        <h4> Stanford University: Pending </h4>
                        <h4 className = "denied"> University of Washington: Denied </h4>
                    </Col>
                </Row>
                </div>
            </div>
        </>
    )
}
// class Home extends React.Component {
//   render() {
//     return <div id = "Home">
//     <div id = "center-wrapper">
//       <Typed id='Home-Typed' strings={['Full-Stack Developer</br>Wonjae Lee']}typeSpeed={200}></Typed></div>
//       </div>
//   }
// }

export default Home