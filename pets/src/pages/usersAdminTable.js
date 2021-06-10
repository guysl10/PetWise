import React from "react";
import { Link } from "react-router-dom";


export default function UsersAdminTable({email, username, is_admin}) {
    return (
        <tr>
            <td>{is_admin.toString()}</td>
            <td>{email}</td>
            <td>{username}</td>
        </tr>
    );
}