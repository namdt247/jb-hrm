const roleItem = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Quản trị viên'},
    {id: 3, name: 'Nhân viên'},
];

const employeeItems = [
    {id: 1, name: 'Đỗ Hồng Hạnh', code: 'NV1'},
    {id: 2, name: 'Trung Quân', code: 'NV2'},
    {id: 3, name: 'Trần Thanh Thảo', code: 'NV3'},
    {id: 4, name: 'Dương Hoàng Yến', code: 'NV4'},
    {id: 5, name: 'Phan Hồng Trường', code: 'NV5'},
    {id: 6, name: 'Đỗ Duy Mạnh', code: 'NV6'},
    {id: 7, name: 'Vũ Nga Linh', code: 'NV7'},
];

//id, name, roomNumber, phone, email, status
const departmentItems = [
    {id: 1, name: 'Phòng hành chính', roomNumber: 'P001', phone: '0987654321', email: 'P001@gmail.com', status: 1},
    {id: 2, name: 'Phòng công đoàn', roomNumber: 'P002', phone: '0987654322', email: 'P002@gmail.com', status: 1},
    {id: 3, name: 'Phòng GĐ', roomNumber: 'P003', phone: '0987654323', email: 'P003@gmail.com', status: 1},
    {id: 4, name: 'Phòng sản xuất', roomNumber: 'P004', phone: '0987654324', email: 'P004@gmail.com', status: 1},
    {id: 5, name: 'Phòng điều hành', roomNumber: 'P005', phone: '0987654325', email: 'P005@gmail.com', status: 1},
];

const cityItems = [
    {id: 1, name: 'Hồ Chí Minh'},
    {id: 2, name: 'Hà Nội'},
    {id: 3, name: 'Bình Dương'},
    {id: 4, name: 'Đà Nẵng'},
    {id: 5, name: 'Hải Phòng'},
    {id: 6, name: 'Long An'},
    {id: 7, name: 'Bà Rịa Vũng Tàu'},
    {id: 8, name: 'An Giang'},
    {id: 9, name: 'Bắc Giang'},
    {id: 10, name: 'Bắc Kạn'},
    {id: 12, name: 'Bạc Liêu'},
    {id: 13, name: 'Bắc Ninh'},
    {id: 14, name: 'Bến Tre'},
    {id: 15, name: 'Bình Định'},
    {id: 16, name: 'Bình Phước'},
    {id: 17, name: 'Bình Thuận '},
    {id: 18, name: 'Cà Mau'},
    {id: 19, name: 'Cần Thơ'},
    {id: 20, name: 'Cao Bằng'},
];

const qualificationItems = [
    {id: 1, name: 'Cử nhân' },
    {id: 2, name: 'Đại học' },
    {id: 3, name: 'Thạc sĩ' },
];

// id, type, name, startDate, endDate, employee, status
const contractItems = [
    {id: 1, type: 'Hợp đồng 3 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '23/03/2021', endDate: '23/06/2021', employee: 'Chu Đình Nghiêm', status: 1 },
    {id: 2, type: 'Hợp đồng 6 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '17/03/2021', endDate: '17/09/2021', employee: 'Đỗ Hồng Nhung', status: 1 },
    {id: 3, type: 'Hợp đồng 12 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '14/07/2021', endDate: '23/06/2022', employee: 'Đặng Quang Vũ', status: 1 },
    {id: 4, type: 'Hợp đồng 3 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '23/03/2021', endDate: '23/06/2022', employee: 'Chu Văn Thái', status: 1 },
    {id: 5, type: 'Hợp đồng 3 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '24/03/2021', endDate: '12/14/2022', employee: 'Nguyễn Hải Yến', status: 1 },
    {id: 6, type: 'Hợp đồng 12 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '13/05/2021', endDate: '23/06/2022', employee: 'Lê Dương', status: 1 },
    {id: 7, type: 'Hợp đồng 12 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '23/03/2021', endDate: '23/06/2022', employee: 'Trần Mỹ Hảo', status: 1 },
    {id: 8, type: 'Hợp đồng 12 tháng', name: 'Hợp đồng lao động ngắn hạn', startDate: '22/12/2021', endDate: '23/06/2022', employee: 'Vũ Nga Linh', status: 1 },
];

const contractType = [
    {id: 1, name: 'Hợp đồng thử việc'},
    {id: 2, name: 'Hợp đồng 3 tháng'},
    {id: 3, name: 'Hợp đồng 6 tháng'},
    {id: 4, name: 'Hợp đồng 12 tháng'},
    {id: 5, name: 'Hợp đồng 5 năm'},
    {id: 6, name: 'Hợp đồng vô thời hạn'},
];

//id, codeEmployee, fullName, trainingUnits, position, department
const workingItems = [
    {id: 1, codeEmployee: 'NV001', fullName: 'Đỗ Hồng Hạnh', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 2, codeEmployee: 'NV002', fullName: 'Trung Quân', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 3, codeEmployee: 'NV003', fullName: 'Trần Thanh Thảo', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 4, codeEmployee: 'NV004', fullName: 'Dương Hoàng Yến', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 5, codeEmployee: 'NV005', fullName: 'Phan Hồng Trường', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 6, codeEmployee: 'NV006', fullName: 'Đỗ Duy Mạnh', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 7, codeEmployee: 'NV007', fullName: 'Vũ Nga Linh', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 8, codeEmployee: 'NV008', fullName: 'Đỗ Hồng Hạnh', trainingUnits: 'Trường Công Đoàn', position: 'Kế toán', department: 'Phòng kế toán' },
];

//id, trainingUnits, specialized, trainingTime, trainingType, degreeType
const degreeItems = [
    {id: 1, trainingUnits: 'ĐH Công Đoàn', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Chuyên viên chính', degreeType: 'Cử nhân' },
    {id: 2, trainingUnits: 'ĐH Nội Vụ', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Chuyên viên chính', degreeType: 'Đại học' },
    // {id: 3, trainingUnits: 'ĐH Ngoại Giao', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Thanh tra', degreeType: 'Cử nhân' },
    // {id: 4, trainingUnits: 'ĐH Công Đoàn', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Chuyên viên chính', degreeType: 'Cử nhân' },
    // {id: 5, trainingUnits: 'ĐH Ngoại Giao', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Chuyên viên chính', degreeType: 'Đại học' },
    // {id: 6, trainingUnits: 'ĐH Ngoại Giao', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Thanh tra', degreeType: 'Cử nhân' },
    // {id: 7, trainingUnits: 'ĐH Nội Vụ', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Chuyên viên chính', degreeType: 'Thạc sĩ' },
    // {id: 8, trainingUnits: 'ĐH Nội Vụ', specialized: 'Kế toán', trainingTime: '12/09/2019 - 12/05/2021', trainingType: 'Thanh tra', degreeType: 'Đại học' },
];

//id, time, description
const workingProcessItems = [
    {id: 1, time: '12/03/2015 - 12/03/2020', description: 'Tham gia hoạt động Đảng' },
    {id: 2, time: '23/12/2019 - 12/10/2022', description: 'Học tập và làm việc tại nước ngoài' },
];

//id, fullName, gender, birthday, position, degreeLevel, politicalLevel
const personnelReportItems = [
    {id: 1, fullName: 'Đỗ Hồng Hạnh', gender: 0, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 2, fullName: 'Trung Quân', gender: 1, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 3, fullName: 'Trần Thanh Thảo', gender: 0, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 4, fullName: 'Dương Hoàng Yến', gender: 0, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 5, fullName: 'Phan Hồng Trường', gender: 1, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 6, fullName: 'Đỗ Duy Mạnh', gender: 1, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
    {id: 7, fullName: 'Vũ Nga Linh', gender: 0, birthday: '12/03/1987', position: 'Kế toán', degreeLevel: 'Cử nhân', politicalLevel: 'Cao cấp' },
];

//id, codeEmployee, fullName, position, department, reviewDate, effectiveDate
const appointItems = [
    {id: 1, codeEmployee: 'NV1', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '20/12/2020', effectiveDate: '22/12/2020'},
    {id: 2, codeEmployee: 'NV2', fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '12/02/2020', effectiveDate: '20/02/2020'},
    {id: 3, codeEmployee: 'NV3', fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '22/05/2020', effectiveDate: '12/06/2020'},
    {id: 4, codeEmployee: 'NV4', fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '21/10/2019', effectiveDate: '30/10/2019'},
    {id: 5, codeEmployee: 'NV5', fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '09/02/2021', effectiveDate: '22/02/2021'},
    {id: 6, codeEmployee: 'NV6', fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '20/04/2020', effectiveDate: '22/04/2020'},
    {id: 7, codeEmployee: 'NV7', fullName: 'Vũ Nga Linh', position: 'Kế toán', department: 'Phòng kế toán', reviewDate: '30/05/2021', effectiveDate: '01/06/2021'},
];

//id, codeEmployee, fullName, position, department
const retirementItems = [
    {id: 1, codeEmployee: 'NV1', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 2, codeEmployee: 'NV2', fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 3, codeEmployee: 'NV3', fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 4, codeEmployee: 'NV4', fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 5, codeEmployee: 'NV5', fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 6, codeEmployee: 'NV6', fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán' },
    {id: 7, codeEmployee: 'NV7', fullName: 'Vũ Nga Linh', position: 'Kế toán', department: 'Phòng kế toán' },
];

//id, decisionName, decisionType, signer, signDate, employee
const bonusItems = [
    {id: 1, decisionName: 'Quyết định khen thưởng số 1', decisionType: 'Khen thưởng', signer: 'Mai Công Sơn', signDate: '22/06/2021', employee: 'Đỗ Hồng Hạnh'},
    {id: 2, decisionName: 'Quyết định khen thưởng số 2', decisionType: 'Khen thưởng', signer: 'Mai Công Sơn', signDate: '22/06/2021', employee: 'Trung Quân'},
    {id: 3, decisionName: 'Quyết định khen thưởng số 3', decisionType: 'Khen thưởng', signer: 'Mai Công Sơn', signDate: '22/06/2021', employee: 'Trần Thanh Thảo'},
    {id: 4, decisionName: 'Quyết định khen thưởng số 4', decisionType: 'Khen thưởng', signer: 'Mai Công Sơn', signDate: '22/06/2021', employee: 'Dương Hoàng Yến'},
    {id: 5, decisionName: 'Quyết định khen thưởng số 5', decisionType: 'Khen thưởng', signer: 'Mai Công Sơn', signDate: '22/06/2021', employee: 'Phan Hồng Trường'},
];

const bonusType = [
    {id: 1, name: 'Khen thưởng'},
    {id: 2, name: 'Kỷ luật'},
];

//id, fullName, position, department, year, holidaysYear, breakDay, remainDay
const leaveItems = [
    {id: 1, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 2, remainDay: 10},
    {id: 2, fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 3, remainDay: 9},
    {id: 3, fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 0, remainDay: 12},
    {id: 4, fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 7, remainDay: 5},
    {id: 5, fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 12, remainDay: 2},
    {id: 6, fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 3, remainDay: 9},
    {id: 7, fullName: 'Vũ Nga Linh', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 6, remainDay: 6},
    {id: 8, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', year: '2021', holidaysYear: 12, breakDay: 8, remainDay: 4},
];

//id, breakDate, note
const leaveDetailItems = [
    {id: 1, breakDate: 2, note: 'Nghỉ 2 ngày 01-02/03/2021' },
    {id: 2, breakDate: 1, note: 'Nghỉ 1 ngày 12/04/2021' },
];

//id, device, quantity, status
const deviceItems = [
    {id: 1, device: 'Bàn', quantity: 10, status: 5},
    {id: 2, device: 'Ghế', quantity: 30, status: 5},
    {id: 3, device: 'Laptop', quantity: 10, status: 1},
];

const deviceStatus = [
    {id: 1, name: 'Lưu kho'},
    {id: 2, name: 'Điều chuyển'},
    {id: 3, name: 'Sửa chữa'},
    {id: 4, name: 'Thanh lý'},
    {id: 5, name: 'Kiểm kê'},
];

//id, fullName, position, department, rateSalary, effectiveDate, currentSalary
const reportSalaryItems = [
    {id: 1, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '3.2', effectiveDate: '12/02/2019', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 2, fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '3.6', effectiveDate: '28/02/2019', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 3, fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '4.3', effectiveDate: '22/06/2020', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 4, fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '5.2', effectiveDate: '18/02/2021', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 5, fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '3.2', effectiveDate: '30/04/2019', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 6, fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '2.7', effectiveDate: '12/02/2018', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 7, fullName: 'Vũ Nga Linh', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '5.0', effectiveDate: '27/11/2019', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
    {id: 8, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', rateSalary: '10.2', effectiveDate: '23/03/2020', currentSalary: 'QĐ-CP 01', dateIncrease: '31/12/2021' },
];

//id, name, roomNumber, numberEmployee
const departmentItems2 = [
    {id: 1, name: 'Phòng hành chính', roomNumber: 'P001', numberEmployee: 30},
    {id: 2, name: 'Phòng công đoàn', roomNumber: 'P002', numberEmployee: 20},
    {id: 3, name: 'Phòng GĐ', roomNumber: 'P003', numberEmployee: 10},
    {id: 4, name: 'Phòng sản xuất', roomNumber: 'P004', numberEmployee: 22},
    {id: 5, name: 'Phòng điều hành', roomNumber: 'P005', numberEmployee: 25},
];

//id, fullName, position, degree
const detailEmployeeRoom = [
    {id: 1, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', degree: 'Cử nhân'},
    {id: 2, fullName: 'Trung Quân', position: 'Kế toán', degree: 'Thạc sĩ'},
    {id: 3, fullName: 'Trần Thanh Thảo', position: 'Kế toán', degree: 'Cử nhân'},
    {id: 4, fullName: 'Dương Hoàng Yến', position: 'Kế toán', degree: 'Thạc sĩ'},
    {id: 5, fullName: 'Phan Hồng Trường', position: 'Kế toán', degree: 'Cử nhân'},
    {id: 6, fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', degree: 'Cử nhân'},
    {id: 7, fullName: 'Vũ Nga Linh', position: 'Kế toán', degree: 'Cử nhân'},
    {id: 8, fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', degree: 'Cử nhân'},
];

//id, code, fullName, position, department, registerDate, status
const reportExamItems = [
    {id: 1, code: 'NV1', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 1},
    {id: 2, code: 'NV2', fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 0},
    {id: 3, code: 'NV3', fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 1},
    {id: 4, code: 'NV4', fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 0},
    {id: 5, code: 'NV5', fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 1},
    {id: 6, code: 'NV6', fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 0},
    {id: 7, code: 'NV7', fullName: 'Vũ Nga Linh', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 0},
    {id: 8, code: 'NV8', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', registerDate: '12/02/2020', status: 1},
];

//id, code, fullName, position, department, allowanceType, startDate, endDate
const reportAllowanceItems = [
    {id: 1, code: 'NV1', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp khu vực', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 2, code: 'NV2', fullName: 'Trung Quân', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp trách nhiệm', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 3, code: 'NV3', fullName: 'Trần Thanh Thảo', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp lưu động', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 4, code: 'NV4', fullName: 'Dương Hoàng Yến', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp khu vực', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 5, code: 'NV5', fullName: 'Phan Hồng Trường', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp trách nhiệm', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 6, code: 'NV6', fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp lưu động', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 7, code: 'NV7', fullName: 'Đỗ Duy Mạnh', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp thâm niên', startDate: '12/02/2020', endDate: '12/02/2022'},
    {id: 8, code: 'NV8', fullName: 'Đỗ Hồng Hạnh', position: 'Kế toán', department: 'Phòng kế toán', allowanceType: 'Phụ cấp thâm niên', startDate: '12/02/2020', endDate: '12/02/2022'},
];

//id, contractCode, contractType, status
const listContractItems = [
    {id: 1, contractCode: 'HD001', contractType: 'Hợp đồng thử việc', status: 1},
    {id: 2, contractCode: 'HD002', contractType: 'Hợp đồng 3 tháng', status: 1},
    {id: 3, contractCode: 'HD003', contractType: 'Hợp đồng 6 tháng', status: 1},
    {id: 4, contractCode: 'HD004', contractType: 'Hợp đồng 1 năm', status: 1},
    {id: 5, contractCode: 'HD005', contractType: 'Hợp đồng 2 năm', status: 1},
    {id: 6, contractCode: 'HD006', contractType: 'Hợp đồng vô thời hạn', status: 0},
];

const contractStatus = [
    {id: 1, name: 'Còn hiệu lực'},
    {id: 2, name: 'Hết hiệu lực'},
];

const monthItems = [
    {id: 1, name: 'Tháng 1'},
    {id: 2, name: 'Tháng 2'},
    {id: 3, name: 'Tháng 3'},
    {id: 4, name: 'Tháng 4'},
    {id: 5, name: 'Tháng 5'},
    {id: 6, name: 'Tháng 6'},
    {id: 7, name: 'Tháng 7'},
    {id: 8, name: 'Tháng 8'},
    {id: 9, name: 'Tháng 9'},
    {id: 10, name: 'Tháng 10'},
    {id: 11, name: 'Tháng 11'},
    {id: 12, name: 'Tháng 12'},
];

const yearItems = [
    {id: 1, name: '2021'},
    {id: 2, name: '2020'},
    {id: 3, name: '2019'},
    {id: 4, name: '2018'},
];

//id, code, fullName, department, month, rate, allowance, totalSalary
const payrollItems = [
    {id: 1, code: 'NV1', fullName: 'Đỗ Hồng Hạnh', department: 'Phòng kế toán', month: '3/2021', rate: '3.2', allowance: 1200000, totalSalary: 8300000},
    {id: 2, code: 'NV2', fullName: 'Trung Quân', department: 'Phòng kế toán', month: '3/2021', rate: '4.2', allowance: 1350000, totalSalary: 8600000},
    {id: 3, code: 'NV3', fullName: 'Trần Thanh Thảo', department: 'Phòng kế toán', month: '3/2021', rate: '5.2', allowance: 1500000, totalSalary: 8350000},
    {id: 4, code: 'NV4', fullName: 'Dương Hoàng Yến', department: 'Phòng kế toán', month: '3/2021', rate: '10.2', allowance: 1350000, totalSalary: 10500000},
    {id: 5, code: 'NV5', fullName: 'Phan Hồng Trường', department: 'Phòng kế toán', month: '3/2021', rate: '3.6', allowance: 1200000, totalSalary: 9600000},
    {id: 6, code: 'NV6', fullName: 'Đỗ Duy Mạnh', department: 'Phòng kế toán', month: '3/2021', rate: '5.2', allowance: 1500000, totalSalary: 10300000},
    {id: 7, code: 'NV7', fullName: 'Đỗ Duy Mạnh', department: 'Phòng kế toán', month: '3/2021', rate: '4.2', allowance: 1200000, totalSalary: 7300000},
    {id: 8, code: 'NV8', fullName: 'Đỗ Hồng Hạnh', department: 'Phòng kế toán', month: '3/2021', rate: '3.2', allowance: 1500000, totalSalary: 8300000},
];

export {
    roleItem,
    employeeItems,
    departmentItems,
    cityItems,
    qualificationItems,
    contractItems,
    contractType,
    workingItems,
    degreeItems,
    workingProcessItems,
    personnelReportItems,
    appointItems,
    retirementItems,
    bonusItems,
    bonusType,
    leaveItems,
    leaveDetailItems,
    deviceItems,
    deviceStatus,
    reportSalaryItems,
    departmentItems2,
    detailEmployeeRoom,
    reportExamItems,
    reportAllowanceItems,
    listContractItems,
    contractStatus,
    monthItems,
    yearItems,
    payrollItems,
}
