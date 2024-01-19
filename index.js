/* Your Code Here */
function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2], 
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employees){
    let employeeRecords =[];
    for( const employee of employees){
        employeeRecords.push(createEmployeeRecord(employee));
    };
    return employeeRecords; 
}
function createTimeInEvent(dateTime){
    let newTimeIn = {
        type:'TimeIn',
        date:dateTime.slice(0,10),
        hour:parseInt(dateTime.slice(11))
    }
    this.timeInEvents.push(newTimeIn);
    return this;
}
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

    return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
//Behavior: Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
}
function findEmployeeByFirstName(employees, firstName){
    return employees.find(entry => entry.firstName === firstName)
//Behavior: Test the firstName field for a match with the firstName argument
}
function calculatePayroll(employees){
    return employees.reduce((total, num) => total + allWagesFor.call(num), 0); //redid this as reduce, I still think the commented out part is easier to read, but it's not as bad as the reduce in allWagesFor()
//Behavior: Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
}
/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

