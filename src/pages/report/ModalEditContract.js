import React, {useState} from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {bonusType, contractStatus, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalEditContract(props) {
    // const [showDefault, setShowDefault] = useState(false);
    const {showModal, setShowModal} = props;
    const handleClose = () => setShowModal(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='xs' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Chỉnh sửa hợp đồng</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Mã hợp đồng</Form.Label>
                        <Form.Control type="text" placeholder="Mã hợp đồng" value='HD001' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Loại hợp đồng</Form.Label>
                        <Form.Control type="text" placeholder="Loại hợp đồng" value='Hợp đồng 3 tháng' />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Hiệu lực</Form.Label>
                        <Form.Select>
                            <option defaultValue>Chọn hiệu lực hợp đồng</option>
                            {contractStatus.map((item) => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
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

export default ModalEditContract;
