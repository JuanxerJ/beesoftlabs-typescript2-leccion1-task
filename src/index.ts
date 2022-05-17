class Alumno {
  public nombre: string;
  public edad: number;
  public correo: string;
  public promedio: number;

  constructor(nombre: string, edad: number, correo: string, promedio: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.promedio = promedio;
  }
}

const alumnos: Array<Alumno> = [
  { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
  { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
  { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
  { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
  { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
  {
    nombre: "Maria Contreras",
    edad: 20,
    correo: "mariaC@gmail.com",
    promedio: 10,
  },
  { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
  {
    nombre: "Angelica Galindo",
    edad: 19,
    correo: "angelica@galindo.com",
    promedio: 7,
  },
  { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
  { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
  { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
  {
    nombre: "Daniela Medina",
    edad: 20,
    correo: "danielamedinaC@gmail.com",
    promedio: 7,
  },
];

const filterAprovedStudents = (arr) =>
  arr.filter((alumno) => alumno.promedio > 6);

const filterByAgeAndAverage = (arr) =>
  arr.filter((alumno) => alumno.promedio < 6 && alumno.edad > 19);

const sortArray = (arr) => arr.sort((a, b) => a.promedio - b.promedio);

const studentsWithAverageLessThan4 = (alumnos) => {
  const luckyStudents = alumnos.map((alumno) => {
    if (alumno.promedio <= 4) {
      alumno.promedio += 2;
      return alumno;
    }
  });
  return luckyStudents.filter((alumnos) => typeof alumnos == "object");
};

const generalAverage = (arr) => {
  const total = arr.reduce((acc, student) => {
    acc += student.promedio;
    return acc;
  }, 0);
  return total / arr.length;
};
filterAprovedStudents(alumnos);
filterByAgeAndAverage(alumnos);
sortArray(alumnos);
studentsWithAverageLessThan4(alumnos);
generalAverage(alumnos);
