import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup, Image} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {cityItems, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";
import photo from '../../assets/img/team/profile-picture-1.jpg';
import BackIcon from "../../components/BackIcon";
import {Routes} from "../../routes";
import {Link} from "react-router-dom";
import Until from "../../common/Util";


function DetailSalary() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chi tiết bảng lương</h4>
                    <BackIcon
                        path={Routes.Payroll.path}
                    />
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <Link to='#'>
                            <Button variant="outline-primary" size="sm">Export</Button>
                        </Link>
                    </ButtonGroup>
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

                                <Form.Group className="mb-3">
                                    <Form.Label>Chức vụ</Form.Label>
                                    <Form.Control type="text" placeholder="Chức vụ" value='Kế toán' />
                                </Form.Group>

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Số công chuẩn tháng 3/2021</Form.Label>*/}
                                {/*    <Form.Control type="text" placeholder="Số công chuẩn" value='22' />*/}
                                {/*</Form.Group>*/}

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Hệ số</Form.Label>*/}
                                {/*    <Form.Control type="text" placeholder="Số công thực tế" value='3.2' />*/}
                                {/*</Form.Group>*/}

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mã NV</Form.Label>
                                    <Form.Control type="text" placeholder="Mã NV" value='NV1' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Họ và tên" value='Phòng kế toán' />
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <h5>Chi tiết bảng lương tháng 3/2021</h5>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={8}>
                                        <div className="mt-2">Số công chuẩn:</div>
                                        <div className="mt-2">Số công thực tế:</div>
                                        <div className="mt-2">Lương cơ bản:</div>
                                        <div className="mt-2">Hệ số:</div>
                                        <div className="mt-2">Phụ cấp:</div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>22</div>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>22</div>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>
                                            {Until.convertMoney(3200000, true)}
                                        </div>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>3.2</div>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>
                                            {Until.convertMoney(1200000, true)}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <div className="mt-2 fw-bolder text-danger">
                                            Tổng lương trong tháng:
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex justify-content-end mt-2 text-danger fw-bolder'>
                                            {Until.convertMoney(8700000, true)}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="mt-2 fw-bolder text-danger">Các khoản giảm trừ:</div>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <div className="mt-2">- Bảo hiểm do nhân viên đóng (10.5%):</div>
                                        <div className="mt-2">- Thuế thu nhập cá nhân:</div>
                                        <div className="mt-2">- Công đoàn:</div>
                                        <div className="mt-2">- Giảm trừ khác:</div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex justify-content-end mt-2 text-success'>
                                            {Until.convertMoney(870000, true)}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="mt-2 fw-bolder text-danger">Các khoản cộng</div>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <div className="mt-2">- Tiền làm thêm giờ:</div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex justify-content-end mt-2 text-dark'>
                                            {Until.convertMoney(700000, true)}
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={8}>
                                        <div className="mt-2 text-danger">Lương thực tế:</div>
                                        <div className="mt-2 fw-bolder text-danger">Thực lĩnh:</div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex justify-content-end mt-2 text-danger'>
                                            {Until.convertMoney(7870000)}
                                        </div>
                                        <div className='d-flex justify-content-end mt-2 fw-bolder text-danger'>
                                            {Until.convertMoney(7870000)}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetailSalary;
