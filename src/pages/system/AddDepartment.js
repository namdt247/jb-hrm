import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {employeeItems, roleItem} from "../../data/main";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";

function AddDepartment() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Thêm mới phòng ban</h4>
                    <BackIcon
                        path={Routes.ManagementDepartment.path}
                    />
                    {/*<Link to={Routes.ManagementDepartment.path}>*/}
                    {/*    <div className="text-info">*/}
                    {/*    <FontAwesomeIcon icon={faAngleLeft} className="me-2"/> Quay lại*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên phòng</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập tên phòng"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Điện thoại</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập số điện thoại"/>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Số phòng</Form.Label>
                                    <Form.Control type="text" placeholder="Số phòng"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Vui lòng nhập email"/>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Button variant="secondary" size='sm' className="m-1">
                            Thêm mới
                        </Button>
                        <Button variant="danger" size='sm' className="m-1">
                            Huỷ bỏ
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default AddDepartment;
