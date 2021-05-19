import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalEditWorking(props) {
    const {showModal, setShowModal} = props;
    const handleClose = () => setShowModal(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='lg' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Chỉnh sửa quá trình công tác</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <MDatepicker
                                labelText="Ngày bắt đầu"
                                date='23/12/2019'
                            />

                        </Col>
                        <Col>
                            <MDatepicker
                                labelText="Ngày kết thúc"
                                date='12/10/2022'
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Mô tả công việc</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                placeholder="Mô tả chi tiết công việc hoạt động"
                                value='Học tập và làm việc tại nước ngoài'
                            />
                        </Form.Group>
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

export default ModalEditWorking;
