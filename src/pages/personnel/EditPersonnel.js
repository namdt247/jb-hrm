import React from "react";
import {Col, Row, Card, Form, Container, InputGroup, Button, ButtonGroup, Image} from '@themesberg/react-bootstrap';
import {departmentItems} from "../../data/department";
import {cityItems, employeeItems, qualificationItems, roleItem} from "../../data/main";
import MDatepicker from "../../components/MDatepicker";
import photo from '../../assets/img/team/profile-picture-1.jpg';
import BackIcon from "../../components/BackIcon";
import {Routes} from "../../routes";


function EditPersonnel() {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <h4>Chỉnh sửa nhân sự</h4>
                    <BackIcon
                        path={Routes.Personnel.path}
                    />
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phòng ban</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn phòng ban</option>
                                        {departmentItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Họ và tên" value="Đặng Quang Vũ" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tên gọi khác</Form.Label>
                                    <Form.Control type="text" placeholder="Tên gọi khác"/>
                                </Form.Group>

                                <MDatepicker
                                    labelText="Ngày sinh"
                                />

                                <Form.Group className="mb-3">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form>
                                        <fieldset className="d-inline-flex">
                                            <Row>
                                                <Col>
                                                    <Form.Check
                                                        defaultChecked
                                                        type="radio"
                                                        defaultValue="option1"
                                                        label="Nam"
                                                        name="exampleRadios"
                                                        id="radio1"
                                                        htmlFor="radio1"
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Check
                                                        type="radio"
                                                        defaultValue="option2"
                                                        label="Nữ"
                                                        name="exampleRadios"
                                                        id="radio2"
                                                        htmlFor="radio2"
                                                    />
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </Form>
                                </Form.Group>

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Họ và tên</Form.Label>*/}
                                {/*    <Form.Control type="email" placeholder="Họ và tên"/>*/}
                                {/*</Form.Group>*/}

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Cấp bậc</Form.Label>*/}
                                {/*    <Form.Select>*/}
                                {/*        <option defaultValue>Vui lòng chọn cấp bậc</option>*/}
                                {/*        {roleItem.map((item) => {*/}
                                {/*            return (*/}
                                {/*                <option>{item.name}</option>*/}
                                {/*            )*/}
                                {/*        })}*/}
                                {/*    </Form.Select>*/}
                                {/*</Form.Group>*/}

                                {/*<Form.Group className="mb-3">*/}
                                {/*    <Form.Label>Liên kết nhân sự</Form.Label>*/}
                                {/*    <Form.Select>*/}
                                {/*        <option defaultValue>Vui lòng chọn nhân sự</option>*/}
                                {/*        {employeeItems.map((item) => {*/}
                                {/*            return (*/}
                                {/*                <option>{item.name}{' - '}{item.code}</option>*/}
                                {/*            )*/}
                                {/*        })}*/}
                                {/*    </Form.Select>*/}
                                {/*</Form.Group>*/}

                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Ảnh</Form.Label>
                                    <Col xs={6}>
                                        <Image src={photo}/>
                                    </Col>
                                    <Form.Control type="file"/>
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Vui lòng nhập email" value="vu@gmail.com" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nơi sinh</Form.Label>
                                    <Form.Control type="text" placeholder="Nơi sinh" value='bệnh viện phụ sản' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Quê quán</Form.Label>
                                    <Form.Control type="text" placeholder="Quê quán" value='Hải Hậu' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Dân tộc</Form.Label>
                                    <Form.Control type="text" placeholder="Dân tộc" value='Kinh' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Địa chỉ thường trú</Form.Label>
                                    <Form.Control type="text" placeholder="Địa chỉ thường chú" value='Nguyễn Khánh Toàn, Cầu Giấy' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nghề nghiệp</Form.Label>
                                    <Form.Control type="text" placeholder="Nghề nghiệp" value='Nhân viên văn phòng' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Điện thoại di động</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập số điện thoại" value='0987654321' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tỉnh/thành phố</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn tỉnh/thành phố</option>
                                        {cityItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tỉnh/thành phố</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Vui lòng chọn tỉnh/thành phố</option>
                                        {cityItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tôn giáo</Form.Label>
                                    <Form.Control type="text" placeholder="Tôn giáo" value="Phật giáo"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nơi ở hiện nay</Form.Label>
                                    <Form.Control type="text" placeholder="Nơi ở hiện nay" value="Số 18 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <MDatepicker
                                    labelText="Ngày tuyển dụng"
                                />

                                <Form.Group className="mb-3">
                                    <Form.Label>Chức vụ hiện tại</Form.Label>
                                    <Form.Control type="text" placeholder="Chức vụ hiện tại" value='Trưởng phòng' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Trình độ giáo dục phổ thông</Form.Label>
                                    <Form.Control type="text" placeholder="12/12" value='12/12' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Lý luận chính trị</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Lý luận chính trị</option>
                                        {qualificationItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Ngoại ngữ</Form.Label>
                                    <Form.Control type="text" placeholder="Ngoại ngữ" value='Tiếng anh' />
                                </Form.Group>

                                <MDatepicker
                                    labelText="Ngày vào Đảng"
                                />
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cơ quan tuyển dụng</Form.Label>
                                    <Form.Control type="text" placeholder="Cơ quan tuyển dụng" value='Bộ giáo dục' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Công việc được giao</Form.Label>
                                    <Form.Control type="text" placeholder="Công việc được giao" value='Kế toán' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Trình độ chuyên môn cao nhất</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Trình độ chuyên môn</option>
                                        {qualificationItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Quản lí nhà nước</Form.Label>
                                    <Form.Select>
                                        <option defaultValue>Quản lí nhà nước</option>
                                        {qualificationItems.map((item) => {
                                            return (
                                                <option>{item.name}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tin học</Form.Label>
                                    <Form.Control type="text" placeholder="Trình độ tin học" value='Giỏi' />
                                </Form.Group>

                                <MDatepicker
                                    labelText="Ngày chính thức"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={9}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tham gia tổ chức CTXH</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Tham gia tổ chức CTXH"/>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Button variant="secondary" size='sm' className="m-1">
                            Thêm mới
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

export default EditPersonnel;
