/*template for my queries*/

SELECT firstName as employeeFirst,
    lastName as employeeLast,
    managerIdNumber as managerIdNumber,
    departmentRoleId as roleId,
    customers.phone as customerPhone,
    offices.phone as employeeNumber,
    extension as employeeNumber
from employees left join customers 
    on employees.employeeNumber = customers.salesRepEmployeeNumber
      inner join offices on offices.officeCode = employees.officeCode
        where contactFirstName is null; 

