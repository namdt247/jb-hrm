import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Breadcrumb, Button, Form, InputGroup} from '@themesberg/react-bootstrap';

import {PageTrafficTable, RankingTable, UserTable} from "../../components/Tables";
import Container from "@themesberg/react-bootstrap/lib/cjs/Container";
import Row from "@themesberg/react-bootstrap/lib/cjs/Row";
import Col from "@themesberg/react-bootstrap/lib/cjs/Col";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import MPagination from "../../components/MPagination";


function ManagementUser() {
    return (
        <>
            <h4>Quản lý người dùng</h4>
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-4">
                <div className="d-block mb-4 mb-xl-0">
                    {/*<Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>*/}
                    {/*  <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>*/}
                    {/*  <Breadcrumb.Item>Tables</Breadcrumb.Item>*/}
                    {/*  <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    {/*<p className="mb-0">*/}
                    {/*  Dozens of reusable components built to provide buttons, alerts, popovers, and more.*/}
                    {/*</p>*/}
                    <Form className="navbar-search">
                        <Form.Group id="topbarSearch">
                            <InputGroup className="input-group-merge search-bar">
                                <InputGroup.Text><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                                <Form.Control type="text" placeholder="Từ khoá"/>
                                <Button variant="secondary" size="large">Tìm kiếm</Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <Link to={Routes.AddUser.path}>
                        <Button variant="danger" size='sm'>
                            Thêm mới
                        </Button>
                    </Link>
                </div>
            </div>

            <UserTable />
            <MPagination />
        </>
    );
};

export default ManagementUser;
