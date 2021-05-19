import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {employeeItems, roleItem} from "../../data/main";
import BackIcon from "../../components/BackIcon";
import {Routes} from "../../routes";

function EditDepartment() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-3">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chỉnh sửa phòng ban</h4>
                    <BackIcon
                        path={Routes.ManagementDepartment.path}
                    />
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên phòng</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập tên phòng" value='Phòng công đoàn' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Điện thoại</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập số điện thoại" value="0987654321"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Hoạt động</option>
                                        <option>Không hoạt động</option>
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Số phòng</Form.Label>
                                    <Form.Control type="text" placeholder="Số phòng" value="P001" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Vui lòng nhập email" value="P001@gmail.com"/>
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

export default EditDepartment;
