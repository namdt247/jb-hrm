import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {contractType, employeeItems, roleItem} from "../../data/main";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";
import MDatepicker from "../../components/MDatepicker";

function AddRetirement() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Thêm mới lịch nghỉ hưu</h4>
                    <BackIcon
                        path={Routes.Retirement.path}
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
                                    <Form.Label>Nhân viên</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Chọn nhân viên</option>
                                        {employeeItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Chức vụ</Form.Label>
                                    <Form.Control type="text" placeholder="Chức vụ" />
                                </Form.Group>

                                <MDatepicker
                                    labelText="Thời gian nghỉ hưu"
                                />

                                <MDatepicker
                                    labelText="Thời gian kéo dài công tác"
                                />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mã NV</Form.Label>
                                    <Form.Control type="text" placeholder="Mã nhân viên" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Phòng ban" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Ghi chú</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Ghi chú" />
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

export default AddRetirement;
