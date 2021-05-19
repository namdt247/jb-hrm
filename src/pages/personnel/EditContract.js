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

function EditContract() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chỉnh sửa hợp đồng</h4>
                    <BackIcon
                        path={Routes.Contract.path}
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
                                    <Form.Label>Loại hợp đồng</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn loại hợp đồng</option>
                                        {contractType.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <MDatepicker
                                    labelText="Ngày bắt đầu"
                                    date='12/02/2021'
                                />

                                <Form.Group className="mb-3">
                                    <Form.Label>File</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nhân viên ký hợp đồng</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn nhân viên</option>
                                        {employeeItems.map((item) => {
                                            return (
                                                <option>{item.name}{' - '}{item.code}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên hợp đồng</Form.Label>
                                    <Form.Control type="text" placeholder="Tên hợp đồng" value="Hợp đồng lao động ngắn hạn" />
                                </Form.Group>

                                <MDatepicker
                                    labelText="Ngày kết thúc"
                                    date='12/06/2021'
                                />

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

export default EditContract;
