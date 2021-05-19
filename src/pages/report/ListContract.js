import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Breadcrumb, Button, ButtonGroup, Form, InputGroup} from '@themesberg/react-bootstrap';

import {AppointTable, ListContractTable, PersonnelTable, ReportSalaryTable} from "../../components/Tables";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import MPagination from "../../components/MPagination";
import ModalAddContract from "./ModalAddContract";


function ListContract() {
    return (
        <>
            <h4>Danh sách hợp đồng</h4>
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
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <ModalAddContract />
                    </ButtonGroup>
                </div>
            </div>

            <ListContractTable />
            <MPagination />
        </>
    );
};

export default ListContract;
