import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {deviceStatus, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalAddDevice() {
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <React.Fragment>
            <Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>

            <Modal as={Modal.Dialog} centered size='lg' show={showDefault} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Thêm mới tài sản</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thiết bị</Form.Label>
                                <Form.Control type="text" placeholder="Nhập tên thiết bị" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Select>
                                    <option defaultValue>Trạng thái thiết bị</option>
                                    {deviceStatus.map((item) => {
                                        return (
                                            <option>{item.name}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số lượng" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thêm mới
                    </Button>
                    <Button variant="warning" className="text-gray" onClick={handleClose}>
                        Huỷ bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ModalAddDevice;
