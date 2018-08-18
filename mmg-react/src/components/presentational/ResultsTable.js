import React from 'react';
import ResultTableRow from "./ResultTableRow";

const ResultsTable = (props) => (
    <div className="results wrapper">
        <h3>top results</h3>
        <table>
            <thead>
            <tr>
                <th>place</th>
                <th>player</th>
                <th>score</th>
            </tr>
            </thead>
            <tbody>
            {props.results.preparedArray.map((item, i) => <ResultTableRow
                    key={i}
                    place={i + 1}
                    player={item.username}
                    score={item.score}
                />
            )}
            </tbody>
        </table>
        <div className="error">
            {props.results.apiError}
        </div>
    </div>
);

export default ResultsTable;
