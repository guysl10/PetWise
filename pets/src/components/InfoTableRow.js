import React from "react";
import { Link } from "react-router-dom";


export default function InfoTableRow({ description, url, images ,type, name, spec }) {
    const specific = "/pets/id/"+ spec;
    

    return (
        <tr>
        <td className="table-plus">
            <img src="../assets/images/gallery-7.jpg" width={70} height={70} alt="" />
        </td>
        <td>
            <h5 className="font-16">Charlie</h5>
        Dog
    </td>
        <td>4</td>
        <td>מעורב</td>
        <td>SOS חיות</td>
        <td>
            <div className="dropdown">
                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="/adminViewPet"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                </div>
            </div>
        </td>
    </tr>
    );
}