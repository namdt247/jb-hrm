
import { faGoogle, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, } from '@fortawesome/free-solid-svg-icons';

import USAFlag from '../assets/img/flags/united-states-of-america.svg';
import CanadaFlag from '../assets/img/flags/canada.svg';
import GermanyFlag from '../assets/img/flags/germany.svg';
import FranceFlag from '../assets/img/flags/france.svg';
import JapanFlag from '../assets/img/flags/japan.svg';
import ItalyFlag from '../assets/img/flags/italy.svg';
import Avatar1 from '../assets/img/team/profile-picture-1.jpg';
import Avatar2 from '../assets/img/team/profile-picture-2.jpg';
import Avatar3 from '../assets/img/team/profile-picture-3.jpg';
import Avatar4 from '../assets/img/team/profile-picture-4.jpg';
import Avatar5 from '../assets/img/team/profile-picture-5.jpg';


const pageVisits = [
    { id: 1, views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
    { id: 2, views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
    { id: 3, views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
    { id: 4, views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
    { id: 5, views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
];

const pageTraffic = [
    { id: 1, source: "Direct", sourceType: "Direct", trafficShare: 51, change: 2.45, sourceIcon: faGlobeEurope, sourceIconColor: "gray" },
    { id: 2, source: "Google Search", sourceType: "Search / Organic", trafficShare: 18, change: 17.67, sourceIcon: faGoogle, sourceIconColor: "info" },
    { id: 3, source: "youtube.com", sourceType: "Social", category: "Arts and Entertainment", rank: 2, trafficShare: 27, sourceIcon: faYoutube, sourceIconColor: "danger" },
    { id: 4, source: "yahoo.com", sourceType: "Referral", category: "News and Media", rank: 11, trafficShare: 8, change: -9.30, sourceIcon: faYahoo, sourceIconColor: "purple" },
    { id: 5, source: "twitter.com", sourceType: "Social", category: "Social Networks", rank: 4, trafficShare: 4, sourceIcon: faTwitter, sourceIconColor: "info" }
];

const pageRanking = [
    { id: 1, country: "United States", countryImage: USAFlag, overallRank: 76, overallRankChange: -5, travelRank: 3, widgetsRank: 32, widgetsRankChange: 3 },
    { id: 2, country: "Canada", countryImage: CanadaFlag, overallRank: 106, overallRankChange: 17, travelRank: 4, widgetsRank: 30, widgetsRankChange: 3 },
    { id: 4, country: "France", countryImage: FranceFlag, overallRank: 112, overallRankChange: 10, travelRank: 5, widgetsRank: 34, widgetsRankChange: 7 },
    { id: 5, country: "Japan", countryImage: JapanFlag, overallRank: 115, overallRankChange: 3, travelRank: 7, travelRankChange: 1, widgetsRank: 39, widgetsRankChange: -2 },
    { id: 3, country: "Germany", countryImage: GermanyFlag, overallRank: 147, overallRankChange: -12, travelRank: 10, travelRankChange: -1, widgetsRank: 12, widgetsRankChange: -5 },
    { id: 6, country: "Italy", countryImage: ItalyFlag, overallRank: 220, overallRankChange: -56, travelRank: 11, travelRankChange: -3, widgetsRank: 89, widgetsRankChange: 2 }
];

const invoiceItems = [
    { id: 1, item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: 2, item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: 3, item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: 4, item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
];

// id, avatar, code, fullName, birthday, position, department

const userItems = [
    { id: 1, avatar: Avatar1, code: 'NV001', fullName: 'Đỗ Hồng Hạnh', birthday: '20/11/1987', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 2, avatar: Avatar2, code: 'NV002', fullName: 'Trung Quân', birthday: '10/01/1977', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 3, avatar: Avatar3, code: 'NV003', fullName: 'Trần Thanh Thảo', birthday: '02/13/1989', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 4, avatar: Avatar4, code: 'NV004', fullName: 'Dương Hoàng Yến', birthday: '22/01/1975', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 5, avatar: Avatar5, code: 'NV005', fullName: 'Phan Hồng Trường', birthday: '04/11/1986', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 6, avatar: Avatar1, code: 'NV006', fullName: 'Đỗ Duy Mạnh', birthday: '12/08/1992', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 7, avatar: Avatar2, code: 'NV007', fullName: 'Vũ Nga Linh', birthday: '20/09/1990', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 8, avatar: Avatar3, code: 'NV008', fullName: 'Hoàng Thị Thảo', birthday: '03/03/1999', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 9, avatar: Avatar4, code: 'NV009', fullName: 'Nguyễn Thị Yến', birthday: '20/04/1985', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 10, avatar: Avatar5, code: 'NV010', fullName: 'Lê Thành Dương', birthday: '29/11/1977', position: 'Nhân viên', department: 'Phòng kế toán' },
    { id: 11, avatar: Avatar1, code: 'NV011', fullName: 'Trần Mỹ Hảo', birthday: '30/01/1988', position: 'Nhân viên', department: 'Phòng kế toán' },
];

// id, email, phone, fullName, permission, createdAt

const userItems2 = [
    { id: 1, email: 'hanh@gmail.com', phone: '0987654321', fullName: 'Đỗ Hồng Hạnh', createdAt: '20/11/2020', permission: 'Admin' },
    { id: 2, email: 'quan@gmail.com', phone: '0987654322', fullName: 'Trung Quân', createdAt: '10/01/2020', permission: 'Quản trị viên' },
    { id: 3, email: 'thao@gmail.com', phone: '0987654323', fullName: 'Trần Thanh Thảo', createdAt: '02/13/2020', permission: 'Quản trị viên' },
    { id: 4, email: 'yen@gmail.com', phone: '0987654324', fullName: 'Dương Hoàng Yến', createdAt: '22/01/2020', permission: 'Quản trị viên' },
    { id: 5, email: 'truong@gmail.com', phone: '0987654325', fullName: 'Phan Hồng Trường', createdAt: '04/11/2020', permission: 'Quản trị viên' },
    { id: 6, email: 'manh@gmail.com', phone: '0987654326', fullName: 'Đỗ Duy Mạnh', createdAt: '12/08/2020', permission: 'Quản trị viên' },
    { id: 7, email: 'linh@gmail.com', phone: '0987654327', fullName: 'Vũ Nga Linh', createdAt: '20/09/2020', permission: 'Quản trị viên' },
    { id: 8, email: 'thao@gmail.com', phone: '0987654328', fullName: 'Hoàng Thị Thảo', createdAt: '03/03/2020', permission: 'Quản trị viên' },
    { id: 9, email: 'yen@gmail.com', phone: '0987654329', fullName: 'Nguyễn Thị Yến', createdAt: '20/04/2020', permission: 'Quản trị viên' },
    { id: 10, email: 'duong@gmail.com', phone: '0987654330', fullName: 'Lê Thành Dương', createdAt: '29/11/2020', permission: 'Quản trị viên' },
    { id: 11, email: 'hao@gmail.com', phone: '0987654331', fullName: 'Trần Mỹ Hảo', createdAt: '30/01/2020', permission: 'Quản trị viên' },
];

export {
    pageVisits,
    pageTraffic,
    pageRanking,
    invoiceItems,
    userItems,
    userItems2
};
