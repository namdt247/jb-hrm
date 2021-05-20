import React, { useState } from "react";
import {Button, Col, Form, Modal, Row} from '@themesberg/react-bootstrap';
import {employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";

function ModalConfirmDelete(props) {
    const {showModalDelete, setShowModalDelete} = props;
    const handleClose = () => setShowModalDelete(false);
    return (
        <React.Fragment>
            {/*<Button variant="danger" size='sm' className="my-3" onClick={() => setShowDefault(true)}>Thêm mới</Button>*/}

            <Modal as={Modal.Dialog} centered size='sm' show={showModalDelete} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="h5">Xoá dữ liệu</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col style={{fontSize: 14}}>
                            Dữ liệu bị xoá sẽ không thể phục hồi, bạn có chắc muốn xoá?
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size='sm' onClick={handleClose}>
                        Đồng ý
                    </Button>
                    <Button variant="warning" size='sm' className="text-gray" onClick={handleClose}>
                        Huỷ bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ModalConfirmDelete;
