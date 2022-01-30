import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Switch,  } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
  { field: 'state', headerName: 'State',  renderCell: (params) => {

    return <Switch defaultChecked={params.value} />
  } }
]

const Table = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
      />
    </div>
  )
}

export default Table