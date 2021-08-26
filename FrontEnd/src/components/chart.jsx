import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'id',
    hide: true,
    identity: true
},
  {
    field: 'Monitor',
    headerName: 'Nombre completo',
    width: 150,
    editable: true,
  },
  {
    field: 'Asignatura',
    headerName: 'Asignatura',
    width: 150,
    editable: true,
  },
  {
    field: 'salon',
    headerName: 'Salon',
    type: 'number',
    width: 110,
    editable: true,
  },  
  {
    field: 'fecha',
    headerName: 'Fecha',
    width: 110,
    editable: true,
  },
 
];

const rows = [
  { "id": 1, lastName: 'Snow', firstName: 'Jon', age: 35 },

];
const MyResponsiveHeatMap = ( {data, monitoria}) => (
<div style={{ height: 400, width: '100%' }}>
<ResponsiveHeatMap
    data={data}
    keys={[
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ]}
    indexBy="monitor"
    margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
    forceSquare={true}
    axisTop={{
      orient: "top",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "",
      legendOffset: 36
    }}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "monitor",
      legendPosition: "middle",
      legendOffset: -40
    }}
    cellOpacity={1}
    cellBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.8]] }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(0, 0, 0, 0.1)",
        rotation: -45,
        lineWidth: 4,
        spacing: 7
      }
    ]}
    fill={[{ id: "lines" }]}
    animate={true}
    motionStiffness={80}
    motionDamping={9}
    hoverTarget="cell"
    cellHoverOthersOpacity={0.25}
  />

<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Monitor</th>
      <th scope="col">Asignatura</th>
      <th scope="col">Salon</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>

  {monitoria[0].map((a) => 
  {return (
    <tr>
      <td>{a["monitor"]}</td>
      {console.log(a["monitor"])}
      <td>{a["materia"]}</td>
      <td>{a["salon"]}</td>
      <td>{a["fecha"]}</td>
    </tr>
)
  })}


  </tbody>
</table>
    </div>
);

export default MyResponsiveHeatMap;

/**
 * import * as React from 'react';



export default function DataTable() {
  return (
    
  );
}



  
 */