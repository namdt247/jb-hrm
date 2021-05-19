import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Breadcrumb, Button, ButtonGroup, Form, InputGroup} from '@themesberg/react-bootstrap';

import {
    ContractTable,
    PageTrafficTable,
    PersonnelReportTable,
    PersonnelTable,
    RankingTable,
    WorkingTable
} from "../../components/Tables";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import MPagination from "../../components/MPagination";


function PersonnelReport() {
    return (
        <>
            <h4>Báo cáo thông tin nhân viên</h4>
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-4">
                <div className="d-block mb-4 mb-xl-0">
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
                {/*<div className="btn-toolbar mb-2 mb-md-0">*/}
                {/*    <ButtonGroup>*/}
                {/*        <Link to={Routes.AddContract.path}>*/}
                {/*            <Button variant="danger" size='sm'>*/}
                {/*                Thêm mới*/}
                {/*            </Button>*/}
                {/*        </Link>*/}

                {/*        /!*<Link to='#'>*!/*/}
                {/*        /!*    <Button variant="outline-primary" size="sm">Export</Button>*!/*/}
                {/*        /!*</Link>*!/*/}
                {/*        /!*<Button variant="outline-primary" size="sm">Share</Button>*!/*/}
                {/*        /!*<Button variant="outline-primary" size="sm">Export</Button>*!/*/}
                {/*    </ButtonGroup>*/}
                {/*</div>*/}
            </div>

            <PersonnelReportTable />
            <MPagination />
        </>
    );
};

export default PersonnelReport;
