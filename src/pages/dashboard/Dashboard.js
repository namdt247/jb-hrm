import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCashRegister,
    faChartLine,
    faCloudUploadAlt,
    faPlus,
    faRocket,
    faSearch,
    faTasks,
    faUserShield
} from '@fortawesome/free-solid-svg-icons';
import {Col, Row, Button, Dropdown, ButtonGroup, Form, InputGroup} from '@themesberg/react-bootstrap';

import {
    CounterWidget,
    CircleChartWidget,
    BarChartWidget,
    TeamMembersWidget,
    ProgressTrackWidget,
    RankingWidget,
    SalesValueWidget,
    SalesValueWidgetPhone,
    AcquisitionWidget
} from "../../components/Widgets";
import {AppointTable, PageVisitsTable} from "../../components/Tables";
import {trafficShares, totalOrders} from "../../data/charts";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import MPagination from "../../components/MPagination";

export default () => {
    return (
        <>
            <h4>Hệ thống quản lý nhân sự</h4>
            <div
                className="d-flex justify-content-center align-items-center "
                style={{
                    height: '70vh',
                }}
            >
                <div className="text-center" style={{color: '#c5aebf', fontSize: 18}}>
                    Chưa có dữ liệu thống kê
                </div>
            </div>
        </>
    );
};
