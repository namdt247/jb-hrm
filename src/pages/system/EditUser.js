import React from "react";
import {
    Col,
    Row,
    Card,
    Form,
    Container,
    InputGroup,
    Button,
    Breadcrumb,
    ButtonGroup
} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {employeeItems, roleItem} from "../../data/main";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import BackIcon from "../../components/BackIcon";

function EditUser() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chỉnh sửa người dùng</h4>
                    <BackIcon
                        path={Routes.ManagementUser.path}
                    />
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <Link to={Routes.ResetPasswordUser.path}>
                            <Button variant="danger" size='sm'>
                                Đặt lại mật khẩu
                            </Button>
                        </Link>
                    </ButtonGroup>
                </div>
            </div>

            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Vui lòng nhập email" value="hanh@gmail.com"/>
                                </Form.Group>

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Mật khẩu</Form.Label>*/}
                                {/*    <Form.Control type="password" placeholder="Vui lòng nhập mật khẩu" />*/}
                                {/*</Form.Group>*/}

                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Họ và tên" value="Đỗ Hồng Hạnh"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Cấp bậc</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn cấp bậc</option>
                                        {roleItem.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Liên kết nhân sự</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn nhân sự</option>
                                        {employeeItems.map((item) => {
                                            return (
                                                <option defaultValue={item.id}>{item.name}{' - '}{item.code}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Điện thoại</Form.Label>
                                    <Form.Control type="phone" placeholder="Vui lòng nhập số điện thoại" value='0987654321'/>
                                </Form.Group>

                            </Col>
                        </Row>


                        <Button variant="info" size='sm' className="m-1">
                            Chỉnh sửa
                        </Button>
                        <Button variant="danger" size='sm' className="m-1">
                            Huỷ bỏ
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default EditUser;
