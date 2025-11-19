const passwordCorrecta = "admin123";
let categorias = JSON.parse(localStorage.getItem("mathdocs")) || [
  {id:1, nombre:"Cálculo", desc:"Derivadas, integrales, límites y más", pdfs:[
    {titulo:"Cálculo I - Apuntes completos", url:"https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"},
    {titulo:"El cálculo en 100 páginas", url:"https://example.com/calculo.pdf"}
  ]},
  {id:2, nombre:"Álgebra Lineal", desc:"Vectores, matrices, transformaciones", pdfs:[
    {titulo:"Álgebra Lineal - Gilbert Strang", url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"}
  ]}
];

function render() {
  const main = document.getElementById("categories");
  main.innerHTML = categorias.map(cat => `
    <div class="category">
      <h3>${cat.nombre}</h3>
      <p>${cat.desc}</p>
      <div class="pdf-list">
        ${cat.pdfs.length ? cat.pdfs.map(p => `
          <div class="pdf-item">
            <span>PDF</span>
            <a href="${p.url}" target="_blank">${p.titulo}</a>
          </div>
        `).join("") : "<p style='color:#999; text-align:center'>Aún no hay documentos</p>"}
      </div>
    </div>
  `).join("");
}
render();

function openAdmin() { document.getElementById("loginModal").style.display="flex"; }
function closeLogin() { document.getElementById("loginModal").style.display="none"; document.getElementById("password").value=""; }
function login() {
  if (document.getElementById("password").value === passwordCorrecta) {
    document.querySelector(".container").style.display="none";
    document.getElementById("adminPanel").style.display="block";
    renderAdmin();
    closeLogin();
  } else alert("Contraseña incorrecta");
}
function logout() {
  document.querySelector(".container").style.display="block";
  document.getElementById("adminPanel").style.display="none";
}
function renderAdmin() {
  // Aquí puedes seguir agregando funciones de admin si quieres (agregar/editar categorías)
  alert("¡Bienvenido al panel admin! (versión básica lista)");
}