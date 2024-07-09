import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150,
    },
    {
      field: 'semester',
      headerName: 'Semester',
      type:'Number',
      width: 100,
    }
  ];
  
  const rows = [
    { id: 1, name: 'Jon Snow', department: 'Computer Science', semester: 2 },
    { id: 2, name: 'Cersei Lannister', department: 'Electrical', semester: 6 },
    { id: 3, name: 'Jaime Lannister', department: 'Mechanical', semester: 4 },
    { id: 4, name: 'Arya Stark', department: 'Civil', semester: 2 },
    { id: 5, name: 'Daenerys Targaryen', department: 'Computer Science', semester: 8 },
    { id: 6, name: 'Melisandre', department: 'Red Priestess', semester: 2 },
    { id: 7, name: 'Ferrara Clifford', department: 'Advisory', semester: 6 },
    { id: 8, name: 'Rossini Frances', department: 'Diplomacy', semester: 4 },
    { id: 9, name: 'Harvey Roxie', department: 'Espionage', semester: 8 },
  ];
  
  

const Records = () => {
  return (
  <>
    <div id="table" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  </>
  )
}

export default Records