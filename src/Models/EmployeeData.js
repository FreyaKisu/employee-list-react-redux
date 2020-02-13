import Employee from "./Employee";

export default function fetchTestEmployees() {
  return [
    new Employee("Jack", "development", 3000, Math.random()),
    new Employee("John", "marketing", 3000, Math.random()),
    new Employee("Janette", "sales", 3000, Math.random())
  ];
}
