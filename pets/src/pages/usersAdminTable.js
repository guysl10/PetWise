import React from "react";
import { Link } from "react-router-dom";


export default function usersAdminTable({email, user_name, is_admin}) {
    return (
        <tr>
            <td>{is_admin}</td>
            <td>{email}</td>
            <td>{user_name}</td>
        </tr>
    );
}