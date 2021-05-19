import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalAddContract() {
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <React.Fragment>
            <Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>

            <Modal as={Modal.Dialog} centered size='xs' show={showDefault} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Thêm mới hợp đồng</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Loại hợp đồng</Form.Label>
                                <Form.Control type="text" placeholder="Loại hợp đồng" />
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

export default ModalAddContract;
