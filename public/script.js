const list = document.getElementById('list');

function load() {
  fetch('/api/todos')
    .then(r => r.json())
    .then(d => {
      list.innerHTML = '';
      d.forEach(t => {
        list.innerHTML += `
          <li class="list-group-item d-flex justify-content-between">
            ${t.text}
            <div>
              <button class="btn btn-sm btn-warning" onclick="edit(${t.id}, '${t.text}')">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="del(${t.id})">X</button>
            </div>
          </li>`;
      });
    });
}

function add() {
  fetch('/api/todos', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({ text: todo.value })
  }).then(() => {
    todo.value = '';
    load();
  });
}

function edit(id, oldText) {
  const newText = prompt('Edit todo', oldText);
  if (!newText) return;

  fetch(`/api/todos/${id}`, {
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({ text: newText })
  }).then(load);
}

function del(id) {
  fetch('/api/todos/'+id, { method:'DELETE' }).then(load);
}

load();
