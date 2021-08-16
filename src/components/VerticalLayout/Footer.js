import React from "react";
import { Row, Col, Container } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
              <footer className="footer">
                  <Container fluid>
                        <Row>
                            <Col sm={6}>
                                {new Date().getFullYear()} © Nazox.
                            </Col>
                            <Col sm={6}>
                                <div className="text-sm-right d-none d-sm-block">
                                    Adminka <a href="https://www.muhammadaliy.uz">muhammadaliy.uz</a> <i className="mdi mdi-heart text-danger"></i> tomonidan tayyorlandi !
                                </div>
                            </Col>
                        </Row>
                  </Container>
              </footer>
    </React.Fragment>
  );
};

export default Footer;
