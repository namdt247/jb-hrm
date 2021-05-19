import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalAddLeave() {
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <React.Fragment>
            <Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>

            <Modal as={Modal.Dialog} centered size='lg' show={showDefault} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Thêm mới ngày nghỉ phép</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Số ngày nghỉ</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số ngày nghỉ" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>File nghỉ phép</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Nhập ghi chú" />
                        </Form.Group>
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

export default ModalAddLeave;
