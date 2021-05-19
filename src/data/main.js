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
}
