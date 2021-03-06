
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCogs, faBook, faShoppingBasket, faClock, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg.svg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon size='xs' icon={icon} /> </span>
              <span className="sidebar-text" style={{ fontSize: 15,}}>{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon size='sm' icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text" style={{ fontSize: 14, }}>{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-2 pt-3" style={{ fontSize: '90%'}}>
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {/*<NavItem title="Volt React" link={Routes.Presentation.path} image={ReactHero} />*/}

              <NavItem title="Dashboard" link={Routes.DashboardOverview.path} icon={faChartPie} />
              {/*<NavItem title="Transactions" icon={faHandHoldingUsd} link={Routes.Transactions.path} />*/}
              {/*<NavItem title="Settings" icon={faCog} link={Routes.Settings.path} />*/}

              <CollapsableNavItem eventKey="system/" title="H??? th???ng" icon={faCogs}>
                <NavItem title="Qu???n l?? ng?????i d??ng" link={Routes.ManagementUser.path} />
                <NavItem title="Qu???n l?? ????n v???, ph??ng ban" link={Routes.ManagementDepartment.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="personnel/" title="Qu???n l?? nh??n s???" icon={faUser}>
                <NavItem title="Nh??n vi??n" link={Routes.Personnel.path} />
                <NavItem title="H???p ?????ng, b???o hi???m" link={Routes.Contract.path} />
                <NavItem title="Qu?? tr??nh l??m vi???c" link={Routes.Working.path} />
                <NavItem title="B??o c??o th??ng tin nh??n vi??n" link={Routes.PersonnelReport.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="attendance/" title="Qu???n l?? ch???m c??ng" icon={faClock}>
                {/*<NavItem title="T??nh l????ng" link={Routes.SalaryCalculation.path} />*/}
                <NavItem title="B???ng l????ng" link={Routes.Payroll.path} />
              </CollapsableNavItem>

              {/*<Dropdown.Divider className="my-3 border-indigo" />*/}

              <CollapsableNavItem eventKey="information/" title="Qu???n l?? th??ng tin" icon={faBook}>
                <NavItem title="Thuy??n chuy???n, b??? nhi???m" link={Routes.Appoint.path} />
                <NavItem title="Tr???ng th??i c??ng t??c, ngh??? h??u" link={Routes.Retirement.path} />
                <NavItem title="Khen th?????ng, k??? lu???t" link={Routes.Bonus.path} />
                <NavItem title="Ngh??? ph??p" link={Routes.Leave.path} />
              </CollapsableNavItem>

              <NavItem title="Qu???n l?? t??i s???n" link={Routes.AssetManagement.path} icon={faShoppingBasket} />

              <CollapsableNavItem eventKey="reports/" title="B??o c??o, th???ng k??" icon={faFileAlt}>
                <NavItem title="B??o c??o n??ng l????ng" link={Routes.ReportIncreaseSalary.path} />
                <NavItem title="B??o c??o ?????i ng?? vi??n ch???c" link={Routes.ReportEmployee.path} />
                <NavItem title="B??o c??o thi n??ng ng???ch" link={Routes.ReportExam.path} />
                <NavItem title="B??o c??o ph??? c???p l????ng" link={Routes.ReportSalaryAllowance.path} />
                <NavItem title="B??o c??o c??n b??? t??? ch???c" link={Routes.ReportEmployeeOrganize.path} />
                <NavItem title="B??o c??o l????ng c??ng ch???c" link={Routes.ReportSalary.path} />
                <NavItem title="Danh s??ch h???p ?????ng" link={Routes.ListContract.path} />
              </CollapsableNavItem>

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
