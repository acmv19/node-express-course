const Express = require("express");
const app = Express();

const { infCursos } = require("./cursos.js");
const { json } = require("body-parser");
//console.log(infCursos);

//routing
app.get("/", (req, res) => {
  res.send("my second server. cursos");
});

app.get("/api/cursos", (req, res) => {
  // res.send(infCursos); mostrar todos los cursos
  res.send(JSON.stringify(infCursos)); //convertirlo en formato json
});

app.get("/api/cursos/programacion", (req, res) => {
  //para obtener solo los cursos de prog
  res.send(JSON.stringify(infCursos.programacion));
});

app.get("/api/cursos/matematicas", (req, res) => {
  //para obtener solo los cursos de prog
  res.send(JSON.stringify(infCursos.matematicas));
});

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );
  if (resultados.length === 0) {
    return res.status(404).send(`not found ${lenguaje}`);
  }
  //querys: para criterios especificos
  console.log(req.query.ordenar);
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))
    );
  }
  res.send(json.stringify(resultados));
});
//usando parametro
app.get("/api/cursos/matematicas/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = infCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );
  if (resultados.length === 0) {
    return res.status(404).send(`not found ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});
// 2 parametros
app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = infCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (resultados.length === 0) {
    return res.status(404).send(`not found ${lenguaje} de nivel${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

const PUERTO = process.env.PORT || 3001;
app.listen(PUERTO, () => {
  console.log("server is listening 3001");
});
