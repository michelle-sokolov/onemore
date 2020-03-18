import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              You also can visit us at our pop-up space at 234 S Beverly Dr
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Social Media</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">His wine page</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shopify link</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;