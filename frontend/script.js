const login = document.getElementById('loginForm');
login.addEventListener('submit', submitLogin);

async function submitLogin(e) {
  e.preventDefault();
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
  const result = await response.json();
  if (response.status === 200) {
    document.getElementById('error').textContent = '';
    document.getElementById('clientsTable').style.display = 'block';
    const clientsResponse = await fetch(
      `/clients/get?responsible=${result.fullName}`,
    );
    const clients = await clientsResponse.json();

    const tbody = document.getElementById('clients').querySelector('tbody');
    tbody.innerHTML = '';
    clients.forEach((client) => {
      const row = document.createElement('tr');
      let date = new Date(client.birthday).toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      row.innerHTML = `
        <td>${client.account}</td>
        <td>${client.surname}</td>
        <td>${client.name}</td>
        <td>${client.patronymic}</td>
        <td>${date}</td>
        <td>${client.INN}</td>
        <td>${client.responsible}</td>
        <td data-client-id="${client._id}">${client.status}</td>
        <td>
          <select data-client-id="${client._id}">
            <option value="" disabled selected hidden>---</option>
            <option>В работе</option>
            <option>Отказ</option>
            <option>Сделка закрыта</option>
          </select>
        </td>
      `;
      tbody.appendChild(row);
    });
    addSelectEventListeners();
  } else {
    document.getElementById('error').textContent = result.message;
    document.getElementById('clientsTable').style.display = 'none';
  }
}

function addSelectEventListeners() {
  const selects = document.querySelectorAll('select[data-client-id]');
  selects.forEach((select) => {
    select.addEventListener('change', async (e) => {
      const clientId = e.target.getAttribute('data-client-id');
      const status = e.target.value;
      const response = await fetch('/clients/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: clientId, status: status }),
      });
      const result = await response.json();
      if (response.status === 200) {
        const selectStatus = document.querySelector(
          `td[data-client-id = "${clientId}"]`,
        );
        selectStatus.textContent = status;
      } else {
        console.error('Error updating status:', result.message);
      }
    });
  });
}
