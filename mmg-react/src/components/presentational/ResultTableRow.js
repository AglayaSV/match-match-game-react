import React from 'react';

const ResultTableRow = (props) => (
    <tr>
        <td>{props.place}</td>
        <td>{props.player}</td>
        <td>{props.score}</td>
    </tr>
);
export default ResultTableRow;