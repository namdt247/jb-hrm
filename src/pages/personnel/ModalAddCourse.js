import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalAddCourse() {
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <React.Fragment>
            <Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>

            <Modal as={Modal.Dialog} centered size='lg' show={showDefault} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Thêm khoá đào tạo</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Đơn vị đào tạo</Form.Label>
                                <Form.Control type="text" placeholder="Nhập đơn vị đào tạo" />
                            </Form.Group>

                            <MDatepicker
                                labelText="Ngày bắt đầu"
                            />

                            <Form.Group className="mb-3">
                                <Form.Label>Hình thức đào tạo</Form.Label>
                                <Form.Control type="text" placeholder="Nhập hình thức đào tạo" />
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Chuyên ngành</Form.Label>
                                <Form.Control type="text" placeholder="Vui lòng nhập chuyên ngành" />
                            </Form.Group>

                            <MDatepicker
                                labelText="Ngày kết thúc"
                            />

                            <Form.Group className="mb-3">
                                <Form.Label>Loại bằng</Form.Label>
                                <Form.Select>
                                    <option defaultValue>Vui lòng chọn loại bằng</option>
                                    {qualificationItems.map((item) => {
                                        return (
                                            <option>{item.name}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thêm mới
                    </Button>
                    <Button variant="link" className="text-gray" onClick={handleClose}>
                        Huỷ
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ModalAddCourse;
