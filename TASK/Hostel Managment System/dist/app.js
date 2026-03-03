import { hostelService } from "./service/hostelService.js";
let service = new hostelService();
// console.log(sevice.loadData());
// service.addResident("harsh", 23, "9876543210", 110, "June");
// service.addResident("harsh", 23, "9876543210", 109, "June");
// service.addResident("harsh", 23, "9876543210", 103, "June");
// service.addResident("harsh", 23, "9876543210", 105, "June");
service.removeResident("1772262070156");
