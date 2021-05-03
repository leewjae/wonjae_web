import React from "react";
import "./css/home.css";
// import Typed from "react-typed";
import { Col} from "reactstrap";

const Home = () => {

    return (
        <>
        <div id = "Home">
            <div id = "center-wrapper">
                {/* <Typed id='Home-Typed' strings={['hello']}typeSpeed={200}></Typed> */}
                <h1>Application Status...</h1>
                <h2>GPA 4.0/4.0 </h2>
                <h2>Major: Computer Science</h2>
                <Col>
                    <h4 className = "accepted"> UC Berkeley: Accepted </h4>
                    <h4 className = "waitlisted"> UCLA: Waitlisted </h4>
                    <h4 className = "accepted"> UC Irvine: Accepted </h4>
                    <h4 className = "accepted"> UC San Diego: Accepted </h4>
                    <h4 className = "pending"> Johns Hopkins University: Pending </h4>
                    <h4 className = "pending"> Georgia Tech: Pending </h4>
                    <h4 className = "pending"> MIT: Pending </h4>
                    <h4 className = "pending"> Rice University: Pending </h4>
                    <h4 className = "pending"> Stanford University: Pending </h4>
                    <h4 className = "pending"> University of Washington: Pending </h4>
                </Col>
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