import React from "react";
import {Col, Row, Card, Form, InputGroup, Button, ButtonGroup} from '@themesberg/react-bootstrap';
import {Routes} from "../../routes";
import BackIcon from "../../components/BackIcon";
import {DetailAssetTable, DetailEmployeeRoomTable, TrainingTable, WorkingProcessTable} from "../../components/Tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function ReportEmployeeOrganize() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Báo cáo nhân viên làm công tác tổ chức cán bộ</h4>
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-2">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Số lượng công chức, viên chức</Form.Label>
                                    <Form.Control type="text" placeholder="Phòng ban" value='30' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form className="navbar-search">
                                    <Form.Label>Tìm kiếm</Form.Label>
                                    <Form.Group id="topbarSearch">
                                        <InputGroup className="input-group-merge search-bar">
                                            <InputGroup.Text><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                                            <Form.Control type="text" placeholder="Search"/>
                                            <Button variant="secondary" size="large">Search</Button>
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Mã phòng ban</Form.Label>*/}
                                {/*    <Form.Control type="text" placeholder="Mã phòng ban" value='P001' />*/}
                                {/*</Form.Group>*/}
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

            <DetailEmployeeRoomTable />
        </>
    );
};

export default ReportEmployeeOrganize;
