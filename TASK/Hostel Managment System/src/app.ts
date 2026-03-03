import { service } from "./services/hostelService.js";
import { UI } from "./UI/UI.js";

const data = new service();
new UI(data);
