import React from 'react';
import ReactDOM from 'react-dom';

let arr = [[23, 32], [69, 96]];

function createReactTable(data, container) {
    ReactDOM.render(<table id='table'>
        <tbody>
            <tr>
                <td>{data[0][0]}</td>
                <td>{data[0][1]}</td>
            </tr>
            <tr>
                <td>{data[1][0]}</td>
                <td>{data[1][1]}</td>
            </tr>
        </tbody>
    </table>,
        document.getElementById(container));
};

createReactTable(arr, 'div1');