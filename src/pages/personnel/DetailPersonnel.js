import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup, Image} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {cityItems, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";
import photo from '../../assets/img/team/profile-picture-1.jpg';
import BackIcon from "../../components/BackIcon";
import {Routes} from "../../routes";


function DetailPersonnel() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Thông tin nhân sự</h4>
                    <BackIcon
                        path={Routes.PersonnelReport.path}
                    />
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Họ và tên" value='Đặng Quang Vũ' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form>
                                        <fieldset className="d-inline-flex">
                                            <Row>
                                                <Col>
                                                    <Form.Check
                                                        defaultChecked
                                                        type="radio"
                                                        defaultValue="option1"
                                                        label="Nam"
                                                        name="exampleRadios"
                                                        id="radio1"
                                                        htmlFor="radio1"
                                                        disabled={true}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Check
                                                        type="radio"
                                                        defaultValue="option2"
                                                        label="Nữ"
                                                        name="exampleRadios"
                                                        id="radio2"
                                                        htmlFor="radio2"
                                                        disabled={true}
                                                    />
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </Form>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <MDatepicker
                                    labelText="Ngày sinh"
                                    date='12/02/1992'
                                />

                                <Form.Group className="mb-3">
                                    <Form.Label>Trình độ đào tạo</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Trình độ đào tạo</option>
                                        {qualificationItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Chức vụ</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng điền chức vụ" value='Kế toán' />
                                </Form.Group>


                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Trình độ lý luận chính trị</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Cao cấp</option>
                                        {/*{qualificationItems.map((item) => {*/}
                                        {/*    return (*/}
                                        {/*        <option>{item.name}</option>*/}
                                        {/*    )*/}
                                        {/*})}*/}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <MDatepicker
                                    labelText="Thời điểm về cơ quan"
                                    date='12/02/2020'
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetailPersonnel;
