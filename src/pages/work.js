import React from "react";
import "./css/work.css"
import {Col, Row, Container} from "reactstrap"

const experiences = [
  {
    'link' : "https://apps.apple.com/kr/app/%EC%83%88%EB%A1%9C%EC%9A%B4-%ED%94%BC%EC%A1%B0%EB%AC%BC-%EC%A0%84%EB%8F%84%EC%A7%80/id1533426135",
    'id' : 0,
    'place' : 'Faith Book Publisher, Yongin, South Korea',
    'title' : 'iOS Application Developer',
    'description' : `I developed an application that serves as a tool to spread Gospel messages to the churches throughout Korea. It had functions to search through the Bible scriptures and prayers for a variety of topics. I later received a request to translate and publish the app in English and Thai, respectively.`,
  },
  
  {
    'link' : 'http://nccs.or.kr/',
    'id' : 1,
    'place' : 'New Creation Christian School, Yongin, South Korea',
    'title' : 'Supervisor, Lecturer',
    'description' :`NCCS, my alma mator, is a small school that
     educates students to become leaders who help their communities.
      Its family-oriented surroundings 
      and 1-on-1 teaching system delivered 
      by dedicated teachers help students 
      to excel in college. While taking my college online
       courses full-time, I started as a volunteer teaching
        assistant. I was then hired as a supervisor and math
         teacher for students in grades 9-12. I held online
          and offline tutoring sessions, taught Science and
           Math in after-school sessions in subjects such as
            Physics and Calculus, and helped as teacher's 
            assistant.`
  },

  {
    'link' : 'http://www.dvhackers.com/',
    'id' : 2,
    'place' : 'DV Hackers, Pleasant Hill, California',
    'title' : 'Vice President, Project Manager',
    'description' : `As the Vice-President of DV Hackers,
     the largest programming club at Diablo Valley College, 
     I lead the breakout rooms where 
     I help the members solve difficult problems during the coding sessions.
     I lead a team in analyzing data using Python, 
    and develop programs that predict outcomes based on the data,
     using the caching learning libraries of Python.
      In my first year as a member, 
      I learned about deep-Q learning and developed motion recognition problems using OpenCV.
     `
  },

  {
    'link' : 'https://www.instagram.com/dvcmathclub/',
    'id' : 3,
    'place' : 'DVC Math Club, Pleasant Hill, California',
    'title' : 'President',
    'description' : `I became an officer and Inter-Club Council Rep. of the Math Club in my first semester.
     As the co-leader of the math tutor sessions, 
     I was privileged to help many students doing lower division math in subjects 
     like Differential Equations and College Algebra. 
     Seeing the students improve their work and capabilities motivated me to do more for them.
     I led meetings and provided the agenda for the club online.
    Being digitally accomplished, I could quickly adapt during the pandemic 
    to the new environment of online sessions. I created the "Weekly Math" sessions 
    to encourage more students to participate, enabling the officers and members to
     become more actively involved even during the pandemic.`,
  },

  {
    'link' : "www.wonjae-lee.com",
    'id' : 4,
    'place' : 'Yongin, South Korea',
    'title' : 'Private Physics and Math Tutor',
    'description' : `I tutored a college freshman and high
     school seniors during my gap year in Calculus I-III. 
     With the knowledge I gathered in high school, 
     I was able to helped them improve their class grades. 
     I gave lectures, held Q&A sessions, and developed quizzes and exams. 
     I taught Vector Calculus, Multivariable Calculus, 
     Rotational Dynamics and College Physics`,
  },
  
]

class Work extends React.Component {

  render() {
    return (

      <Container id = "Work">
        <div className = "Header">Work / Experiences</div>
        {experiences.map(experience =>(
              <Row key = {experience.id}>
                <Col key = {experience.id}>
                  <a href = {experience.link} target='_blank' rel="noreferrer" className = "Work-Place">{experience.place}</a>
                  <div className = "Work-Title">{experience.title}</div>
                  <div className = "Work-Description">{experience.description}</div>
                </Col>
              </Row>
        ))  
        }
    </Container>
    )
  }
}

export default Work

