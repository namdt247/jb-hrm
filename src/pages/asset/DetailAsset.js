import React from "react";
import {Col, Row, Card, Form} from '@themesberg/react-bootstrap';
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";
import {DetailAssetTable, TrainingTable, WorkingProcessTable} from "../../components/Tables";

function DetailAsset() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chi tiết tài sản</h4>
                    <BackIcon
                        path={Routes.AssetManagement.path}
                    />
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-2">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Phòng ban" value='Phòng công đoàn' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mã phòng ban</Form.Label>
                                    <Form.Control type="text" placeholder="Mã phòng ban" value='P001' />
                                </Form.Group>
                            </Col>
                        </Row>


                        {/*<Button variant="secondary" size='sm' className="m-1">*/}
                        {/*    Thêm mới*/}
                        {/*</Button>*/}
                        {/*<Button variant="danger" size='sm' className="m-1">*/}
                        {/*    Huỷ bỏ*/}
                        {/*</Button>*/}
                    </Form>
                </Card.Body>
            </Card>

            <DetailAssetTable />
        </>
    );
};

export default DetailAsset;
