import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Breadcrumb, Button, ButtonGroup, Form, InputGroup} from '@themesberg/react-bootstrap';

import {AppointTable, PersonnelTable, ReportExamTable, ReportSalaryTable} from "../../components/Tables";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import MPagination from "../../components/MPagination";


function ReportExam() {
    return (
        <>
            <h4>Báo cáo thi nâng ngạch</h4>
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
                                <Form.Control type="text" placeholder="Search"/>
                                <Button variant="secondary" size="large">Search</Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        {/*<Link to={Routes.AddAppoint.path}>*/}
                        {/*    <Button variant="danger" size='sm'>*/}
                        {/*        Thêm mới*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}

                        <Link to='#'>
                            <Button variant="outline-primary" size="sm">Export</Button>
                        </Link>
                        {/*<Button variant="outline-primary" size="sm">Share</Button>*/}
                        {/*<Button variant="outline-primary" size="sm">Export</Button>*/}
                    </ButtonGroup>
                </div>
            </div>

            <ReportExamTable />
            <MPagination />
        </>
    );
};

export default ReportExam;
