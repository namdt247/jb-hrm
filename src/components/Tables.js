import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faArrowDown,
    faArrowUp,
    faEdit,
    faCheck,
    faEllipsisH,
    faExternalLinkAlt,
    faEye,
    faTrashAlt,
    faSearch,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
    Col,
    Row,
    Nav,
    Card,
    Image,
    Button,
    Table,
    Dropdown,
    ProgressBar,
    Pagination,
    ButtonGroup,
    Form, InputGroup
} from '@themesberg/react-bootstrap';
import {Link} from 'react-router-dom';

import {Routes} from "../routes";
import {pageVisits, pageTraffic, pageRanking, userItems, userItems2} from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import {
    appointItems,
    bonusItems,
    contractItems,
    degreeItems,
    departmentItems,
    departmentItems2,
    detailEmployeeRoom,
    deviceItems,
    leaveDetailItems,
    leaveItems,
    listContractItems,
    payrollItems,
    personnelReportItems,
    reportAllowanceItems,
    reportExamItems,
    reportSalaryItems,
    retirementItems,
    workingItems,
    workingProcessItems
} from "../data/main";
import ModalAddCourse from "../pages/personnel/ModalAddCourse";
import ModalAddWorking from "../pages/personnel/ModalAddWorking";
import ModalEditCourse from "../pages/personnel/ModalEditCourse";
import ModalEditWorking from "../pages/personnel/ModalEditWorking";
import ModalAddLeave from "../pages/information/ModalAddLeave";
import ModalEditLeave from "../pages/information/ModalEditLeave";
import ModalAddDevice from "../pages/asset/ModalAddDevice";
import ModalEditDevice from "../pages/asset/ModalEditDevice";
import ReportSalaryAllowance from "../pages/report/ReportSalaryAllowance";
import ModalEditContract from "../pages/report/ModalEditContract";
import ModalConfirmDelete from "../pages/components/ModalConfirmDelete";
import Until from "../common/Util";

const ValueChange = ({value, suffix}) => {
    const valueIcon = value < 0 ? faAngleDown : faAngleUp;
    const valueTxtColor = value < 0 ? "text-danger" : "text-success";

    return (
        value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon}/>
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
    );
};

const styles = {
    styleAction: {
        cursor: 'pointer',
    },
};

export const PageVisitsTable = () => {
    const TableRow = (props) => {
        const {pageName, views, returnValue, bounceRate} = props;
        const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
        const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

        return (
            <tr>
                <th scope="row">{pageName}</th>
                <td>{views}</td>
                <td>${returnValue}</td>
                <td>
                    <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`}/>
                    {Math.abs(bounceRate)}%
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm">
            <Card.Header>
                <Row className="align-items-center">
                    <Col>
                        <h5>Page visits</h5>
                    </Col>
                    <Col className="text-end">
                        <Button variant="secondary" size="sm">See all</Button>
                    </Col>
                </Row>
            </Card.Header>
            <Table responsive className="align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Page Views</th>
                    <th scope="col">Page Value</th>
                    <th scope="col">Bounce rate</th>
                </tr>
                </thead>
                <tbody>
                {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
                </tbody>
            </Table>
        </Card>
    );
};

export const PageTrafficTable = () => {
    const TableRow = (props) => {
        const {id, source, sourceIcon, sourceIconColor, sourceType, category, rank, trafficShare, change} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td className="fw-bold">
                    <FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`}/>
                    {source}
                </td>
                <td>{sourceType}</td>
                <td>{category ? category : "--"}</td>
                <td>{rank ? rank : "--"}</td>
                <td>
                    <Row className="d-flex align-items-center">
                        <Col xs={12} xl={2} className="px-0">
                            <small className="fw-bold">{trafficShare}%</small>
                        </Col>
                        <Col xs={12} xl={10} className="px-0 px-xl-1">
                            <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0}
                                         max={100}/>
                        </Col>
                    </Row>
                </td>
                <td>
                    <ValueChange value={change} suffix="%"/>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-4">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">#</th>
                        <th className="border-0">Traffic Source</th>
                        <th className="border-0">Source Type</th>
                        <th className="border-0">Category</th>
                        <th className="border-0">Global Rank</th>
                        <th className="border-0">Traffic Share</th>
                        <th className="border-0">Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pageTraffic.map(pt => <TableRow key={`page-traffic-${pt.id}`} {...pt} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const RankingTable = () => {
    const TableRow = (props) => {
        const {country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange} = props;

        return (
            <tr>
                <td className="border-0">
                    <Card.Link href="#" className="d-flex align-items-center">
                        <Image src={countryImage} className="image-small rounded-circle me-2"/>
                        <div><span className="h6">{country}</span></div>
                    </Card.Link>
                </td>
                <td className="fw-bold border-0">
                    {overallRank ? overallRank : "-"}
                </td>
                <td className="border-0">
                    <ValueChange value={overallRankChange}/>
                </td>
                <td className="fw-bold border-0">
                    {travelRank ? travelRank : "-"}
                </td>
                <td className="border-0">
                    <ValueChange value={travelRankChange}/>
                </td>
                <td className="fw-bold border-0">
                    {widgetsRank ? widgetsRank : "-"}
                </td>
                <td className="border-0">
                    <ValueChange value={widgetsRankChange}/>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">Country</th>
                        <th className="border-0">All</th>
                        <th className="border-0">All Change</th>
                        <th className="border-0">Travel & Local</th>
                        <th className="border-0">Travel & Local Change</th>
                        <th className="border-0">Widgets</th>
                        <th className="border-0">Widgets Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pageRanking.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const TransactionsTable = () => {
    const totalTransactions = transactions.length;

    const TableRow = (props) => {
        const {invoiceNumber, subscription, price, issueDate, dueDate, status} = props;
        const statusVariant = status === "Paid" ? "success"
            : status === "Due" ? "warning"
                : status === "Canceled" ? "danger" : "primary";

        return (
            <tr>
                <td>
                    <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
                        {invoiceNumber}
                    </Card.Link>
                </td>
                <td>
          <span className="fw-normal">
            {subscription}
          </span>
                </td>
                <td>
          <span className="fw-normal">
            {issueDate}
          </span>
                </td>
                <td>
          <span className="fw-normal">
            {dueDate}
          </span>
                </td>
                <td>
          <span className="fw-normal">
            ${parseFloat(price).toFixed(2)}
          </span>
                </td>
                <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {status}
          </span>
                </td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark"/>
              </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <FontAwesomeIcon icon={faEye} className="me-2"/> View Details
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger">
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2"/> Remove
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                    <thead>
                    <tr>
                        <th className="border-bottom">#</th>
                        <th className="border-bottom">Bill For</th>
                        <th className="border-bottom">Issue Date</th>
                        <th className="border-bottom">Due Date</th>
                        <th className="border-bottom">Total</th>
                        <th className="border-bottom">Status</th>
                        <th className="border-bottom">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
                    </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                    <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                            <Pagination.Prev>
                                Previous
                            </Pagination.Prev>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item>3</Pagination.Item>
                            <Pagination.Item>4</Pagination.Item>
                            <Pagination.Item>5</Pagination.Item>
                            <Pagination.Next>
                                Next
                            </Pagination.Next>
                        </Pagination>
                    </Nav>
                    <small className="fw-bold">
                        Showing <b>{totalTransactions}</b> out of <b>25</b> entries
                    </small>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export const CommandsTable = () => {
    const TableRow = (props) => {
        const {name, usage = [], description, link} = props;

        return (
            <tr>
                <td className="border-0" style={{width: '5%'}}>
                    <code>{name}</code>
                </td>
                <td className="fw-bold border-0" style={{width: '5%'}}>
                    <ul className="ps-0">
                        {usage.map(u => (
                            <ol key={u} className="ps-0">
                                <code>{u}</code>
                            </ol>
                        ))}
                    </ul>
                </td>
                <td className="border-0" style={{width: '50%'}}>
                    <pre className="m-0 p-0">{description}</pre>
                </td>
                <td className="border-0" style={{width: '40%'}}>
                    <pre><Card.Link href={link} target="_blank">Read More <FontAwesomeIcon icon={faExternalLinkAlt}
                                                                                           className="ms-1"/></Card.Link></pre>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm">
            <Card.Body className="p-0">
                <Table responsive className="table-centered rounded"
                       style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0" style={{width: '5%'}}>Name</th>
                        <th className="border-0" style={{width: '5%'}}>Usage</th>
                        <th className="border-0" style={{width: '50%'}}>Description</th>
                        <th className="border-0" style={{width: '40%'}}>Extra</th>
                    </tr>
                    </thead>
                    <tbody>
                    {commands.map(c => <TableRow key={`command-${c.id}`} {...c} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const PersonnelTable = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, avatar, code, fullName, birthday, position, department} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td className="fw-bold">
                    {/*<FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />*/}
                    {/*{source}*/}
                    <Image src={avatar} width={40} height={40} className="sidebar-icon svg-icon"/>
                </td>
                <td>{code}</td>
                <td>{fullName}</td>
                <td>{birthday}</td>
                <td>
                    {position}
                    {/*<Row className="d-flex align-items-center">*/}
                    {/*    <Col xs={12} xl={2} className="px-0">*/}
                    {/*        <small className="fw-bold">{trafficShare}%</small>*/}
                    {/*    </Col>*/}
                    {/*    <Col xs={12} xl={10} className="px-0 px-xl-1">*/}
                    {/*        <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </td>
                <td>
                    {department}
                </td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.EditPersonnel.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Sửa
                            </Link>
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Ảnh</th>
                        <th className="border-0">Mã</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Ngày sinh</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const UserTable = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, email, phone, fullName, permission, createdAt} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                {/*<td className="fw-bold">*/}
                {/*    /!*<FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />*!/*/}
                {/*    /!*{source}*!/*/}
                {/*    <Image src={avatar} width={40} height={40} className="sidebar-icon svg-icon" />*/}
                {/*</td>*/}
                <td>{email}</td>
                <td>{phone}</td>
                <td>{fullName}</td>
                <td>
                    {permission}
                    {/*<Row className="d-flex align-items-center">*/}
                    {/*    <Col xs={12} xl={2} className="px-0">*/}
                    {/*        <small className="fw-bold">{trafficShare}%</small>*/}
                    {/*    </Col>*/}
                    {/*    <Col xs={12} xl={10} className="px-0 px-xl-1">*/}
                    {/*        <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </td>
                <td>
                    {createdAt}
                </td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.EditUser.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Sửa
                            </Link>
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Email</th>
                        <th className="border-0">Điện thoại</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Cấp bậc</th>
                        <th className="border-0">Ngày tạo</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userItems2.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const DepartmentTable = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, name, roomNumber, phone, email, status} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                {/*<td className="fw-bold">*/}
                {/*    /!*<FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />*!/*/}
                {/*    /!*{source}*!/*/}
                {/*    <Image src={avatar} width={40} height={40} className="sidebar-icon svg-icon" />*/}
                {/*</td>*/}
                <td>{name}</td>
                <td>{roomNumber}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger"/>
                </td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.EditDepartment.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Sửa
                            </Link>
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Phòng ban</th>
                        <th className="border-0">Số phòng</th>
                        <th className="border-0">Điện thoại</th>
                        <th className="border-0">Email</th>
                        <th className="border-0">Hiệu lực</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {departmentItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const ContractTable = () => {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, type, name, startDate, endDate, employee, status} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                {/*<td className="fw-bold">*/}
                {/*    /!*<FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />*!/*/}
                {/*    /!*{source}*!/*/}
                {/*    <Image src={avatar} width={40} height={40} className="sidebar-icon svg-icon" />*/}
                {/*</td>*/}
                <td>{type}</td>
                <td>{name}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{employee}</td>
                <td>
                    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger"/>
                </td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.EditContract.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Sửa
                            </Link>
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Loại hợp đồng</th>
                        <th className="border-0">Tên hợp đồng</th>
                        <th className="border-0">Ngày bắt đầu</th>
                        <th className="border-0">Ngày kết thúc</th>
                        <th className="border-0">Nhân viên</th>
                        <th className="border-0">Hiệu lực</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contractItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const WorkingTable = () => {
    const TableRow = (props) => {
        const {id, codeEmployee, fullName, trainingUnits, position, department} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                {/*<td className="fw-bold">*/}
                {/*    /!*<FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />*!/*/}
                {/*    /!*{source}*!/*/}
                {/*    <Image src={avatar} width={40} height={40} className="sidebar-icon svg-icon" />*/}
                {/*</td>*/}
                <td>{codeEmployee}</td>
                <td>{fullName}</td>
                <td>{trainingUnits}</td>
                <td>{position}</td>
                <td>{department}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailWorking.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã cán bộ</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Đơn vị đào tạo</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {workingItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const TrainingTable = () => {
    const [showModal, setShowModal] = useState(false);
    const TableRow = (props) => {
        const {id, trainingUnits, specialized, trainingTime, trainingType, degreeType} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{trainingUnits}</td>
                <td>{specialized}</td>
                <td>{trainingTime}</td>
                <td>{trainingType}</td>
                <td>{degreeType}</td>
                <td>
                    <div className="row">
                        <div className="col-6"
                             onClick={() => setShowModal(!showModal)}
                             style={{
                                 cursor: "pointer",
                             }}
                        >
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Sửa
                        </div>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Các khoá đào đạo</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <ModalAddCourse/>
                    </ButtonGroup>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Đơn vị đào tạo</th>
                        <th className="border-0">Chuyên ngành</th>
                        <th className="border-0">Thời gian đào tạo</th>
                        <th className="border-0">Hình thức đào tạo</th>
                        <th className="border-0">Loại bằng</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {degreeItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalEditCourse
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </Card>
    );
};

export const WorkingProcessTable = () => {
    const [showModal, setShowModal] = useState(false);
    const TableRow = (props) => {
        const {id, time, description} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{time}</td>
                <td>{description}</td>
                <td>
                    <div className="row">
                        <div
                            className="col-6"
                            onClick={() => setShowModal(!showModal)}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Sửa
                        </div>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Quá trình công tác</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <ModalAddWorking/>
                    </ButtonGroup>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Thời gian</th>
                        <th className="border-0">Mô tả công việc</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {workingProcessItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalEditWorking
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </Card>
    );
};

export const PersonnelReportTable = () => {
    const TableRow = (props) => {
        const {id, fullName, gender, birthday, position, degreeLevel, politicalLevel} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{fullName}</td>
                <td>{gender === 1 ? 'Nam' : 'Nữ'}</td>
                <td>{birthday}</td>
                <td>{position}</td>
                <td>{degreeLevel}</td>
                <td>{politicalLevel}</td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailPersonnel.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Giới tính</th>
                        <th className="border-0">Ngày sinh</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Trình độ đào tạo</th>
                        <th className="border-0">Trình độ LLCT</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {personnelReportItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const AppointTable = () => {
    const TableRow = (props) => {
        const {id, codeEmployee, fullName, position, department, reviewDate, effectiveDate} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{codeEmployee}</td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{reviewDate}</td>
                <td>{effectiveDate}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailAppoint.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã cán bộ</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Ngày ký</th>
                        <th className="border-0">Ngày hiệu lực</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const RetirementTable = () => {
    const TableRow = (props) => {
        const {id, codeEmployee, fullName, position, department} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{codeEmployee}</td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailRetirement.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã cán bộ</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {retirementItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const BonusTable = () => {
    const TableRow = (props) => {
        const {id, decisionName, decisionType, signer, signDate, employee} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{decisionName}</td>
                <td>{decisionType}</td>
                <td>{signer}</td>
                <td>{signDate}</td>
                <td>{employee}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailBonus.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Tên quyết định</th>
                        <th className="border-0">Loại</th>
                        <th className="border-0">Người ký quyết định</th>
                        <th className="border-0">Ngày ký</th>
                        <th className="border-0">Nhân viên được khen thưởng, kỷ luật</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bonusItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const LeaveTable = () => {
    const TableRow = (props) => {
        const {id, fullName, position, department, year, holidaysYear, breakDay, remainDay} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{year}</td>
                <td>{holidaysYear}</td>
                <td>{breakDay}</td>
                <td>{remainDay}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailLeave.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Nhân viên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Năm</th>
                        <th className="border-0">TC</th>
                        <th className="border-0">Đã nghỉ</th>
                        <th className="border-0">Còn lại</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaveItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const LeaveDetailTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, breakDate, note} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{breakDate}</td>
                <td>{note}</td>
                <td>
                    <div className="row">
                        <div className="col-6"
                             onClick={() => setShowModal(!showModal)}
                             style={{
                                 cursor: "pointer",
                             }}
                        >
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Sửa
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Chi tiết ngày nghỉ phép</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <ModalAddLeave/>
                    </ButtonGroup>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Số ngày nghỉ</th>
                        <th className="border-0">Ghi chú</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaveDetailItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalEditLeave
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const AssetTable = () => {
    const TableRow = (props) => {
        const {id, name, roomNumber} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{roomNumber}</td>
                <td>{name}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.DetailAsset.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã phòng</th>
                        <th className="border-0">Phòng ban</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {departmentItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const DetailAssetTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const showStatus = (status) => {
        let str = '';
        switch (status) {
            case 1:
                str = 'Lưu kho';
                break;
            case 2:
                str = 'Điều chuyển';
                break;
            case 3:
                str = 'Sửa chữa';
                break;
            case 4:
                str = 'Thanh lý';
                break;
            default:
                str = 'Kiểm kê';
                break;
        }
        return str;
    }

    const TableRow = (props) => {
        const {id, device, quantity, status} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{device}</td>
                <td>{quantity}</td>

                <td>
                    {showStatus(status)}
                </td>
                <td>
                    <div className="row">
                        <div className="col-6"
                             onClick={() => setShowModal(!showModal)}
                             style={{
                                 cursor: "pointer",
                             }}
                        >
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Sửa
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={{cursor: "pointer"}}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Danh sách tài sản</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        <ModalAddDevice/>
                    </ButtonGroup>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Tên thiết bị</th>
                        <th className="border-0">Số lượng</th>
                        <th className="border-0">Trạng thái</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {deviceItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalEditDevice
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const ReportSalaryTable = () => {
    const TableRow = (props) => {
        const {id, fullName, position, department, rateSalary, effectiveDate, currentSalary} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{rateSalary}</td>
                <td>{effectiveDate}</td>
                <td>{currentSalary}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-6">*/}
                {/*            <Link to={Routes.DetailAppoint.path}>*/}
                {/*                <FontAwesomeIcon icon={faEdit} className="me-2" />*/}
                {/*                <br /> Chi tiết*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="col-6">*/}
                {/*            <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                {/*            <br /> Xoá*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</td>*/}
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Hệ số</th>
                        <th className="border-0">Từ ngày</th>
                        <th className="border-0">Quyết định lương hiện hưởng</th>
                        {/*<th className="border-0">Thao tác</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {reportSalaryItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const ReportIncreaseSalaryTable = () => {
    const TableRow = (props) => {
        const {id, fullName, position, department, rateSalary, effectiveDate, currentSalary, dateIncrease} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{rateSalary}</td>
                <td>{effectiveDate}</td>
                <td>{currentSalary}</td>
                <td>{dateIncrease}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-6">*/}
                {/*            <Link to={Routes.DetailAppoint.path}>*/}
                {/*                <FontAwesomeIcon icon={faEdit} className="me-2" />*/}
                {/*                <br /> Chi tiết*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="col-6">*/}
                {/*            <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                {/*            <br /> Xoá*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</td>*/}
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Hệ số</th>
                        <th className="border-0">Từ ngày</th>
                        <th className="border-0">Quyết định lương hiện hưởng</th>
                        <th className="border-0">Thời điểm nâng lương tiếp theo</th>
                        {/*<th className="border-0">Thao tác</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {reportSalaryItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const ReportEmployeeTable = () => {
    const TableRow = (props) => {
        const {id, name, roomNumber, numberEmployee} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{name}</td>
                <td>{roomNumber}</td>
                <td>{numberEmployee}</td>
                {/*<td>*/}
                {/*    <FontAwesomeIcon icon={faCheck} className="me-2 text-danger" />*/}
                {/*</td>*/}
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to={Routes.ReportDetailEmployeeRoom.path}>
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Chi tiết
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã phòng</th>
                        <th className="border-0">Phòng ban</th>
                        <th className="border-0">Số lượng nhân viên</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {departmentItems2.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const DetailEmployeeRoomTable = () => {
    const TableRow = (props) => {
        const {id, fullName, position, degree} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{degree}</td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Danh sách nhân viên</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='#'>
                        <Button variant="outline-primary" size="sm">Export</Button>
                    </Link>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Học vị</th>
                    </tr>
                    </thead>
                    <tbody>
                    {detailEmployeeRoom.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const ReportExamTable = () => {
    const TableRow = (props) => {
        const {id, code, fullName, position, department, registerDate, status} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{code}</td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{registerDate}</td>
                <td>
                    {status === 1
                        ? <FontAwesomeIcon icon={faCheck} className="me-2 text-danger"/>
                        : <FontAwesomeIcon icon={faTimes} className="me-2 text-danger"/>
                    }
                </td>
                <td>
                    <div className="row">
                        <div className="col-6">
                            <Link to="#">
                                <FontAwesomeIcon icon={faEdit} className="me-2"/>
                                <br/> Xét duyệt
                            </Link>
                        </div>
                        {/*<div className="col-6">*/}
                        {/*    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />*/}
                        {/*    <br /> Xoá*/}
                        {/*</div>*/}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã NV</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Ngày đăng ký</th>
                        <th className="border-0">Xét duyệt</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reportExamItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const ReportSalaryAllowanceTable = () => {
    const TableRow = (props) => {
        const {id, code, fullName, position, department, allowanceType, startDate, endDate} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{code}</td>
                <td>{fullName}</td>
                <td>{position}</td>
                <td>{department}</td>
                <td>{allowanceType}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã NV</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Chức vụ</th>
                        <th className="border-0">Phòng</th>
                        <th className="border-0">Chế độ phụ cấp</th>
                        <th className="border-0">Ngày bắt đầu</th>
                        <th className="border-0">Ngày kết thúc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reportAllowanceItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export const ListContractTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const TableRow = (props) => {
        const {id, contractCode, contractType, status} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{contractCode}</td>
                <td>{contractType}</td>
                <td>
                    {status === 1
                        ? <FontAwesomeIcon icon={faCheck} className="me-2 text-danger"/>
                        : <FontAwesomeIcon icon={faTimes} className="me-2 text-danger"/>
                    }
                </td>
                <td>
                    <div className="row">
                        <div
                            className="col-6"
                            onClick={() => setShowModal(!showModal)}
                            style={styles.styleAction}
                        >
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Sửa
                        </div>
                        <div
                            className="col-6"
                            onClick={() => setShowModalDelete(!showModalDelete)}
                            style={styles.styleAction}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>
                            <br/> Xoá
                        </div>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã hợp đồng</th>
                        <th className="border-0">Loại hợp đồng</th>
                        <th className="border-0">Hiệu lực</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listContractItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
            <ModalEditContract
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ModalConfirmDelete
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
            />
        </Card>
    );
};

export const SalaryTable = () => {
    const TableRow = (props) => {
        const {id, code, fullName, department, month, rate, allowance, totalSalary} = props;

        return (
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
                </td>
                <td>{code}</td>
                <td>{fullName}</td>
                <td>{department}</td>
                <td>{month}</td>
                <td>{rate}</td>
                <td>
                    {Until.convertMoney(allowance, true)}
                </td>
                <td className='text-danger'>
                    {Until.convertMoney(totalSalary, true)}
                </td>
                <td>
                    <div className="row">
                        <Link to={Routes.DetailSalary.path}>
                            <FontAwesomeIcon icon={faEdit} className="me-2"/>
                            <br/> Chi tiết
                        </Link>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm mb-2">
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mx-3 mt-3">
                <div className="d-block mb-4 mb-xl-0">
                    <h5>Chi tiết bảng lương</h5>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='#'>
                        <Button variant="outline-primary" size="sm">Export</Button>
                    </Link>
                </div>
            </div>
            <Card.Body className="pb-0">
                <Table responsive className="table-centered table-nowrap rounded mb-0">
                    <thead className="thead-light">
                    <tr>
                        <th className="border-0">STT</th>
                        <th className="border-0">Mã NV</th>
                        <th className="border-0">Họ và tên</th>
                        <th className="border-0">Phòng ban</th>
                        <th className="border-0">Tháng</th>
                        <th className="border-0">Hệ số</th>
                        <th className="border-0">Phụ cấp</th>
                        <th className="border-0">Tổng lương</th>
                        <th className="border-0">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payrollItems.map((user) => <TableRow key={`user-${user.id}`} {...user} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
