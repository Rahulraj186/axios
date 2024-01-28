// GET REQUEST
function getTodos() {
  axios.get("https://crudcrud.com/api/6d4eb51f4f8b4d8aa493face4ada11b2/appointment")
  .then(res=>showOutput(res))
  .catch(err=> console.log(err));
}

// POST REQUEST
function addTodo() {
  axios.post("https://crudcrud.com/api/6d4eb51f4f8b4d8aa493face4ada11b2/appointment",{
    name : "Abrar",
    lastname : "shakeel"
  })
  .then(res => showOutput(res))
  .catch(err=>console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put("https://crudcrud.com/api/6d4eb51f4f8b4d8aa493face4ada11b2/appointment/65b62c16658e2403e8762fc7",{
    email:"rahulraj18670@gmail.com",
    lastname:"sah"
  })
  .then(res => showOutput(res))
  .catch(err=>console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete("https://crudcrud.com/api/6d4eb51f4f8b4d8aa493face4ada11b2/appointment/65b62c16658e2403e8762fc7")
  .then(res => showOutput(res))
  .catch(err=>console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    ("https://jsonplaceholder.typicode.com/posts")
  ])
  .then(axios.spread((todos, posts) => showOutput(posts)))
  .catch(err=>console.error(err))
  
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
