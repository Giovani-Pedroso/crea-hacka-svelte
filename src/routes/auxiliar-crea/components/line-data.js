
// const csvWest = `Mes,Realizadas
// Jan,9.213920
// Fev,12.323836
// Mar,14.379119
// Abr,20.189962
// Jun,28.053104
// Jul,34.804193
// Ago,43.172490
// Set,52.786082
// Out,63.197932
// Nov,71.945553
// Dez,78.588572`;

const csvWest = `Year,Relatorios
2013,9.213920
2014,12
2015,14
2016,20
2017,28
2018,34
2019,43
2020,52
2021,63
2022,71
2023,78`;

function csvConvert(csv) {
  return csv.split('\n').slice(1).map(str => {
    const [date, relatorios] = str.split(',')
    .map((el) => (el > 1900 ? new Date(el, 0) : parseFloat(el)));
    return { date, relatorios };
  });
}
const west = csvConvert(csvWest);

export default [
  {
    id: 'West',
    data: west
  }
]
