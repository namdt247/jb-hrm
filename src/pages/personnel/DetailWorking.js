import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup, Table} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {contractType, employeeItems, roleItem, workingItems} from "../../data/main";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";
import MDatepicker from "../../components/MDatepicker";
import {TrainingTable, WorkingProcessTable} from "../../components/Tables";
import ModalAddCourse from "./ModalAddCourse";

function DetailWorking() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chi tiết quá trình làm việc</h4>
                    <BackIcon
                        path={Routes.Working.path}
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
                                    <Form.Label>Mã cán bộ</Form.Label>
                                    <Form.Control type="text" placeholder="Mã cán bộ" value='NV001' />
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Họ và tên" value='Đặng Quang Vũ' />
                                </Form.Group>

                            </Col>
                        </Row>


                        {/*<Button variant="secondary" size='sm' className="m-1">*/}
                        {/*    Thêm mới*/}
                        {/*</Button>*/}
                        {/*<Button variant="danger" size='sm' className="m-1">*/}
                        {/*    Huỷ bỏ*/}
                        {/*</Button>*/}
                    </Form>
                </Card.Body>
            </Card>

            <TrainingTable />

            <WorkingProcessTable />
        </>
    );
};

export default DetailWorking;
