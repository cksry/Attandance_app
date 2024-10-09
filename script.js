// script.js
// Get the navigation menu items
const navItems = document.querySelectorAll('nav ul li');

// Add event listeners to the navigation menu items
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Get the clicked menu item's text content
    const menuItemText = e.target.textContent;

    // Handle the menu item clicks
    switch (menuItemText) {
      case 'Absen Masuk Pulang':
        // Render the attendance check-in/check-out form
        renderAttendanceForm();
        break;
      case 'Izin Cuti':
        // Render the leave request form
        renderLeaveRequestForm();
        break;
      case 'Sakit':
        // Render the sick leave request form
        renderSickLeaveRequestForm();
        break;
      default:
        console.log('Unknown menu item clicked');
    }
  });
});

// Function to render the attendance check-in/check-out form
function renderAttendanceForm() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>Absen Masuk Pulang</h2>
    <form>
      <label for="employee-id">Employee ID:</label>
      <input type="text" id="employee-id" name="employee-id"><br><br>
      <label for="attendance-date">Attendance Date:</label>
      <input type="date" id="attendance-date" name="attendance-date"><br><br>
      <label for="attendance-type">Attendance Type:</label>
      <select id="attendance-type" name="attendance-type">
        <option value="masuk">Masuk</option>
        <option value="pulang">Pulang</option>
      </select><br><br>
      <button type="submit">Submit</button>
    </form>
  `;
}

// Function to render the leave request form
function renderLeaveRequestForm() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>Izin Cuti</h2>
    <form>
      <label for="employee-id">Employee ID:</label>
      <input type="text" id="employee-id" name="employee-id"><br><br>
      <label for="leave-date">Leave Date:</label>
      <input type="date" id="leave-date" name="leave-date"><br><br>
      <label for="leave-reason">Leave Reason:</label>
      <textarea id="leave-reason" name="leave-reason"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  `;
}

// Function to render the sick leave request form
function renderSickLeaveRequestForm() {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <h2>Sakit</h2>
    <form>
      <label for="employee-id">Employee ID:</label>
      <input type="text" id="employee-id" name="employee-id"><br><br>
      <label for="sick-date">Sick Date:</label>
      <input type="date" id="sick-date" name="sick-date"><br><br>
      <label for="sick-reason">Sick Reason:</label>
      <textarea id="sick-reason" name="sick-reason"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  `;
}

