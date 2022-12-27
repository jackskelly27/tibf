import React from 'react'

function RecordItem({record}) {
  return (
    <tr>
      <td>{record.year}</td>
      <td>{record.total.wins}</td>
      <td>{record.total.losses}</td>
      <td>{record.conference}</td>
    </tr>
  )
}

export default RecordItem;