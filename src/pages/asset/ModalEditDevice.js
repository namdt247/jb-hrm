import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {deviceStatus, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalEditDevice(props) {
    // const [showDefault, setShowDefault] = useState(false);
    const {showModal, setShowModal} = props;
    const handleClose = () => setShowModal(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='lg' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Thêm mới tài sản</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thiết bị</Form.Label>
                                <Form.Control type="text" placeholder="Nhập tên thiết bị" value='Laptop' />
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
                                <Form.Control type="text" placeholder="Nhập số lượng" value='10' />
                            </Form.Group>
                        </Col>
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

export default ModalEditDevice;
