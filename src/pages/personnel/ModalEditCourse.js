import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalEditCourse(props) {
    const {showModal, setShowModal} = props;
    // const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowModal(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='lg' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Chỉnh sửa khoá đào tạo</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Đơn vị đào tạo</Form.Label>
                                <Form.Control type="text" placeholder="Nhập đơn vị đào tạo" value='ĐH Công Đoàn' />
                            </Form.Group>

                            <MDatepicker
                                labelText="Ngày bắt đầu"
                                date='12/09/2019'
                            />

                            <Form.Group className="mb-3">
                                <Form.Label>Hình thức đào tạo</Form.Label>
                                <Form.Control type="text" placeholder="Nhập hình thức đào tạo" value='Chuyên viên chính' />
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Chuyên ngành</Form.Label>
                                <Form.Control type="text" placeholder="Vui lòng nhập chuyên ngành" value='Kế toán' />
                            </Form.Group>

                            <MDatepicker
                                labelText="Ngày kết thúc"
                                date='12/05/2021'
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
                        Cập nhật
                    </Button>
                    <Button variant="link" className="text-gray" onClick={handleClose}>
                        Huỷ
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ModalEditCourse;
