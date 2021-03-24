import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import thumb from './thumb.svg'
// import Image from 'react-bootstrap/Image'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

const Footer = ({ user }) => (
  <Navbar bg="secondary" variant="dark" expand="md" fixed="bottom">
    <Nav className="ml-auto">
      {/* <div className="like-it">
        <Image src={thumb} alt="I like it"/>
      </div> */}
    </Nav>
  </Navbar>
)

export default Footer
