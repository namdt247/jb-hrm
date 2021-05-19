import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup, Table} from '@themesberg/react-bootstrap';
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";
import {LeaveDetailTable, TrainingTable, WorkingProcessTable} from "../../components/Tables";

function DetailLeave() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chi tiết thông tin nghỉ phép</h4>
                    <BackIcon
                        path={Routes.Leave.path}
                    />
                    {/*<Link to={Routes.ManagementDepartment.path}>*/}
                    {/*    <div className="text-info">*/}
                    {/*    <FontAwesomeIcon icon={faAngleLeft} className="me-2"/> Quay lại*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-2">
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
                                    <Form.Control type="text" placeholder="Chức vụ" value='Trưởng phòng' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mã cán bộ</Form.Label>
                                    <Form.Control type="text" placeholder="Mã cán bộ" value='NV001' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Phòng ban" value='Phòng công đoàn' />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            <LeaveDetailTable />
        </>
    );
};

export default DetailLeave;
