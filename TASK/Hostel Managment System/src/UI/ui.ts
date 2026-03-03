import { service } from "../services/hostelService.js";

export class UI {
  private form: HTMLFormElement;
  private tableBody: HTMLTableSectionElement;
  private statsDiv: HTMLDivElement;
  private roomSelect: HTMLSelectElement;
  // private editResidentId: string | null = null;
  constructor(private service: service) {
    this.form = document.getElementById("residentForm") as HTMLFormElement;
    this.tableBody = document.getElementById(
      "residentTableBody",
    ) as HTMLTableSectionElement;
    this.statsDiv = document.getElementById("stats") as HTMLDivElement;
    this.roomSelect = document.getElementById(
      "roomNumber",
    ) as HTMLSelectElement;

    this.init();
  }

  private init(): void {
    this.populateRoomDropdown();
    this.renderResidents();
    this.renderStats();
    this.handleFormSubmit();
    this.handleDelete();
  }

  // Populate only vacant rooms
  private populateRoomDropdown(): void {
    this.roomSelect.innerHTML = "";

    const vacantRooms = this.service.getVacantRooms();

    if (vacantRooms.length === 0) {
      const option = document.createElement("option");
      option.textContent = "No Vacant Rooms";
      option.disabled = true;
      option.selected = true;
      this.roomSelect.appendChild(option);
      return;
    }

    vacantRooms.forEach((room) => {
      const option = document.createElement("option");
      option.value = room.roomNumber.toString();
      option.textContent = `Room ${room.roomNumber}`;
      this.roomSelect.appendChild(option);
    });
  }

  private renderResidents(): void {
    this.tableBody.innerHTML = "";
    const residents = this.service.getResidents;
    residents.forEach((resident) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${resident.name}</td>
        <td>${resident.age}</td>
        <td>${resident.phone}</td>
        <td>${resident.roomNumber}</td>
        <td>${resident.checkInDate}</td>
        <td>
             <button data-id="${resident.id}" class="deleteBtn">Delete</button>
        </td>
      `;
      this.tableBody.appendChild(row);
    });
  }

  private renderStats(): void {
    const stats = this.service.getRoomStats();

    this.statsDiv.innerHTML = `
      <p>Total Rooms: ${stats.total}</p>
      <p>Occupied Rooms: ${stats.occupied}</p>
      <p>Vacant Rooms: ${stats.vacant}</p>
    `;
  }

  private handleFormSubmit(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = (document.getElementById("name") as HTMLInputElement).value;
      const age = Number(
        (document.getElementById("age") as HTMLInputElement).value,
      );
      const phone = (document.getElementById("phone") as HTMLInputElement)
        .value;
      const roomNumber = Number(this.roomSelect.value);
      const checkInDate = (
        document.getElementById("checkInDate") as HTMLInputElement
      ).value;

      try {
        this.service.addResident(name, age, phone, roomNumber, checkInDate);

        this.renderResidents();
        this.renderStats();
        this.populateRoomDropdown();

        this.form.reset();
      } catch (error: any) {
        alert(error.message);
      }
    });
  }

  private handleDelete(): void {
    this.tableBody.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains("deleteBtn")) {
        const id = target.getAttribute("data-id");

        if (id) {
          this.service.removeResident(id);

          this.renderResidents();
          this.renderStats();
          this.populateRoomDropdown();
        }
      }
    });
  }
}
