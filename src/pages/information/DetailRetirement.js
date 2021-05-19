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

function DetailRetirement() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chi tiết lịch nghỉ hưu</h4>
                    <BackIcon
                        path={Routes.Retirement.path}
                    />
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
                                    <Form.Control type="text" placeholder="Chức vụ" value='Kế toán' />
                                </Form.Group>

                                <MDatepicker
                                    labelText="Thời gian nghỉ hưu"
                                    date='06/12/2030'
                                />

                                <MDatepicker
                                    labelText="Thời gian kéo dài công tác"
                                    date='06/12/2032'
                                />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mã NV</Form.Label>
                                    <Form.Control type="text" placeholder="Mã nhân viên" value='NV1' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Phòng ban" value='Phòng kế toán' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Ghi chú</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Ghi chú" value='Kéo dài thời gian công tác' />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Button variant="secondary" size='sm' className="m-1">
                            Cập nhật
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

export default DetailRetirement;
