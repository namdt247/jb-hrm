
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
  let history = useHistory();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [messageError, setMessageError] = useState('');
  function checkLogin(userName, password) {
    let check = false;
    switch (userName) {
      case 'admin':
        if (password === '123456') {
          check = true;
        }
        break;
      default:
        break;
    }
    return check;
  }
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/*<p className="text-center">*/}
          {/*  <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">*/}
          {/*    <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage*/}
          {/*  </Card.Link>*/}
          {/*</p>*/}
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Đăng nhập vào hệ thống</h3>
                </div>
                <div className="text-danger">
                  {messageError}
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                          autoFocus
                          required
                          type="text"
                          placeholder="example@hrm.com"
                          onChange={(e) => {
                            setUserName(e.target.value);
                            setMessageError('');
                          }}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                            autoFocus
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                              setMessageError('');
                            }}
                        />
                      </InputGroup>
                    </Form.Group>
                    {/*<div className="d-flex justify-content-between align-items-center mb-4">*/}
                    {/*  <Form.Check type="checkbox">*/}
                    {/*    <FormCheck.Input id="defaultCheck5" className="me-2" />*/}
                    {/*    <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>*/}
                    {/*  </Form.Check>*/}
                    {/*  <Card.Link className="small text-end">Lost password?</Card.Link>*/}
                    {/*</div>*/}
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100"
                          onClick={(e) => {
                            if (userName && password) {
                              e.preventDefault();
                              if (checkLogin(userName, password)) {
                                history.push(Routes.DashboardOverview.path)
                              } else {
                                alert('Tên đăng nhập/mật khẩu không đúng');
                              }
                            }
                          }}
                  >
                    Đăng nhập
                  </Button>
                </Form>

                {/*<div className="mt-3 mb-4 text-center">*/}
                {/*  <span className="fw-normal">or login with</span>*/}
                {/*</div>*/}
                {/*<div className="d-flex justify-content-center my-4">*/}
                {/*  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">*/}
                {/*    <FontAwesomeIcon icon={faFacebookF} />*/}
                {/*  </Button>*/}
                {/*  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">*/}
                {/*    <FontAwesomeIcon icon={faTwitter} />*/}
                {/*  </Button>*/}
                {/*  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">*/}
                {/*    <FontAwesomeIcon icon={faGithub} />*/}
                {/*  </Button>*/}
                {/*</div>*/}
                {/*<div className="d-flex justify-content-center align-items-center mt-4">*/}
                {/*  <span className="fw-normal">*/}
                {/*    Not registered?*/}
                {/*    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">*/}
                {/*      {` Create account `}*/}
                {/*    </Card.Link>*/}
                {/*  </span>*/}
                {/*</div>*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
