import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalEditLeave(props) {
    // const [showDefault, setShowDefault] = useState(false);
    const {showModal, setShowModal} = props;
    const handleClose = () => setShowModal(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='lg' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Chỉnh sửa ngày nghỉ phép</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Số ngày nghỉ</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số ngày nghỉ" value='2' />
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
                            <Form.Control as="textarea" rows="4" placeholder="Nhập ghi chú" value='Nghỉ 2 ngày 01-02/03/2021' />
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cập nhật
                    </Button>
                    <Button variant="warning" className="text-gray" onClick={handleClose}>
                        Huỷ bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ModalEditLeave;
