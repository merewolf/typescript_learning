abstract class Department {
  /*   private readonly id: string;
  private name: string; */
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    /*     this.id = id;
    this.name = n; */
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d1', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  private addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
}

const employee = Department.createEmployee('Triin');
console.log(employee);
const accounting = AccountingDepartment.getInstance();

accounting.addEmployee('Romannu');
accounting.addEmployee('Carol');
accounting.addEmployee('Max');
accounting.addEmployee('Doris');
accounting.describe();
accounting.printEmployeeInformation();
accounting.mostRecentReport = 'Raporteerin midagi mida ma ei tea';
accounting.mostRecentReport = 'Raporteerin, et kõik on hästi';
console.log(accounting.mostRecentReport);

const itDepartment = new ITDepartment('d2', ['Romannu', 'Stella Nutella']);
itDepartment.addEmployee('Liis');

console.log(itDepartment);
console.log(accounting);
accounting.printReports();
