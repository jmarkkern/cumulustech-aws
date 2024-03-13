// Page1.js
import React from 'react';
import amazonLogo from "./assets/imgs/amazonLogo.svg"

const Page3 = () => {
    return (
        <div className="containerLeaderboard1">
            <div className="item nav_bar">
                <img className="logo" src={amazonLogo} alt="AWS Logo" />
            </div>
            <div className="item title">
                <h1>Average Handle Time</h1>
            </div>
            <div className="item table">
                <table className="table2">
                    <tbody>
                        <tr>
                            <td style={{ width: '1%', backgroundColor: 'white', border: 'none' }}></td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> 1 </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table3" style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'left' }}>Rank</th>
                            <th style={{ textAlign: 'center' }}>Pic/Agent</th>
                            <th style={{ textAlign: 'center' }}>###</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Name</td>
                            <td>#</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page3;
