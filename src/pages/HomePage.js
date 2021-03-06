import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import ManagementUser from "./system/ManagementUser";
import ManagementDepartment from "./system/ManagementDepartment";
import Personnel from "./personnel/Personnel";
import Contract from "./personnel/Contract";
import Working from "./personnel/Working";
import PersonnelReport from "./personnel/PersonnelReport";
import Payroll from "./attendance/Payroll";
import Bonus from "./information/Bonus";
import Leave from "./information/Leave";
import Report from "./report/Report";
import AddUser from "./system/AddUser";
import EditUser from "./system/EditUser";
import ResetPasswordUser from "./system/ResetPasswordUser";
import AddDepartment from "./system/AddDepartment";
import EditDepartment from "./system/EditDepartment";
import AddPersonnel from "./personnel/AddPersonnel";
import EditPersonnel from "./personnel/EditPersonnel";
import AddContract from "./personnel/AddContract";
import EditContract from "./personnel/EditContract";
import DetailWorking from "./personnel/DetailWorking";
import DetailPersonnel from "./personnel/DetailPersonnel";
import Appoint from "./information/Appoint";
import AddAppoint from "./information/AddAppoint";
import DetailAppoint from "./information/DetailAppoint";
import Retirement from "./information/Retirement";
import AddRetirement from "./information/AddRetirement";
import DetailRetirement from "./information/DetailRetirement";
import AddBonus from "./information/AddBonus";
import DetailBonus from "./information/DetailBonus";
import DetailLeave from "./information/DetailLeave";
import AssetManagement from "./asset/AssetManagement";
import DetailAsset from "./asset/DetailAsset";
import ReportSalary from "./report/ReportSalary";
import ReportIncreaseSalary from "./report/ReportIncreaseSalary";
import ReportEmployee from "./report/ReportEmployee";
import ReportDetailEmployee from "./report/ReportDetailEmployee";
import ReportExam from "./report/ReportExam";
import ReportSalaryAllowance from "./report/ReportSalaryAllowance";
import ReportEmployeeOrganize from "./report/ReportEmployeeOrganize";
import ListContract from "./report/ListContract";
import Dashboard from "./dashboard/Dashboard";
import DetailSalary from "./attendance/DetailSalary";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          {/*<Footer toggleSettings={toggleSettings} showSettings={showSettings} />*/}
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={Dashboard} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    {/* System */}
    <RouteWithSidebar exact path={Routes.ManagementUser.path} component={ManagementUser} />
    <RouteWithSidebar exact path={Routes.AddUser.path} component={AddUser} />
    <RouteWithSidebar exact path={Routes.EditUser.path} component={EditUser} />
    <RouteWithSidebar exact path={Routes.ResetPasswordUser.path} component={ResetPasswordUser} />

    <RouteWithSidebar exact path={Routes.ManagementDepartment.path} component={ManagementDepartment} />
    <RouteWithSidebar exact path={Routes.AddDepartment.path} component={AddDepartment} />
    <RouteWithSidebar exact path={Routes.EditDepartment.path} component={EditDepartment} />

    {/* Personnel */}
    <RouteWithSidebar exact path={Routes.Personnel.path} component={Personnel} />
    <RouteWithSidebar exact path={Routes.AddPersonnel.path} component={AddPersonnel} />
    <RouteWithSidebar exact path={Routes.EditPersonnel.path} component={EditPersonnel} />

    <RouteWithSidebar exact path={Routes.Contract.path} component={Contract} />
    <RouteWithSidebar exact path={Routes.AddContract.path} component={AddContract} />
    <RouteWithSidebar exact path={Routes.EditContract.path} component={EditContract} />

    <RouteWithSidebar exact path={Routes.Working.path} component={Working} />
    <RouteWithSidebar exact path={Routes.DetailWorking.path} component={DetailWorking} />
    <RouteWithSidebar exact path={Routes.PersonnelReport.path} component={PersonnelReport} />
    <RouteWithSidebar exact path={Routes.DetailPersonnel.path} component={DetailPersonnel} />

    {/* Attendance */}
    <RouteWithSidebar exact path={Routes.Payroll.path} component={Payroll} />
    <RouteWithSidebar exact path={Routes.DetailSalary.path} component={DetailSalary} />

    {/* Information */}
    <RouteWithSidebar exact path={Routes.Appoint.path} component={Appoint} />
    <RouteWithSidebar exact path={Routes.AddAppoint.path} component={AddAppoint} />
    <RouteWithSidebar exact path={Routes.DetailAppoint.path} component={DetailAppoint} />

    <RouteWithSidebar exact path={Routes.Retirement.path} component={Retirement} />
    <RouteWithSidebar exact path={Routes.AddRetirement.path} component={AddRetirement} />
    <RouteWithSidebar exact path={Routes.DetailRetirement.path} component={DetailRetirement} />

    <RouteWithSidebar exact path={Routes.Bonus.path} component={Bonus} />
    <RouteWithSidebar exact path={Routes.AddBonus.path} component={AddBonus} />
    <RouteWithSidebar exact path={Routes.DetailBonus.path} component={DetailBonus} />

    <RouteWithSidebar exact path={Routes.Leave.path} component={Leave} />
    <RouteWithSidebar exact path={Routes.DetailLeave.path} component={DetailLeave} />

    {/* Asset */}
    <RouteWithSidebar exact path={Routes.AssetManagement.path} component={AssetManagement} />
    <RouteWithSidebar exact path={Routes.DetailAsset.path} component={DetailAsset} />

    {/* Report */}
    <RouteWithSidebar exact path={Routes.Report.path} component={Report} />
    <RouteWithSidebar exact path={Routes.ReportIncreaseSalary.path} component={ReportIncreaseSalary} />
    <RouteWithSidebar exact path={Routes.ReportSalary.path} component={ReportSalary} />
    <RouteWithSidebar exact path={Routes.ReportEmployee.path} component={ReportEmployee} />
    <RouteWithSidebar exact path={Routes.ReportDetailEmployeeRoom.path} component={ReportDetailEmployee} />
    <RouteWithSidebar exact path={Routes.ReportExam.path} component={ReportExam} />
    <RouteWithSidebar exact path={Routes.ReportSalaryAllowance.path} component={ReportSalaryAllowance} />
    <RouteWithSidebar exact path={Routes.ReportEmployeeOrganize.path} component={ReportEmployeeOrganize} />
    <RouteWithSidebar exact path={Routes.ListContract.path} component={ListContract} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
