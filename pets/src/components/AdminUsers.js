import React, { Component } from 'react';
import Article from "../pages/article";
import UsersAdminTable from "../pages/usersAdminTable";


export default function AdminUsers() {

// class AdminUsers extends Component {
    const [allusers, setAllUsers] = React.useState([]);

   React.useEffect(() => {
    fetch('http://localhost:8000/petWise/get_users')
      .then(response => response.json())
      .then(
        data => {
            console.log(data.data)
            setAllUsers(data.data);
        }
      )
  }, [])


    // render() {
        return (
            <>
                <div>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>


                        <div className="row no-gutters" style={{ padding: "0% 3%", paddingBottom: "12%" }}>
                            <div style={{ width: "100%" }}>
                                <table className="w3-table w3-striped w3-white">
                                    <thead>
                                        <tr>
                                            <th className="table-plus">האם אדמין</th>
                                            <th>אימייל</th>
                                            <th>שם</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allusers.map((data, key) => {
                                    return <UsersAdminTable key={key} email={data.email} username={data.username} is_admin={data.is_admin} />
                                  })}
                                    </tbody></table>
                            </div>

                        </div>


                    </div></div>
            </>
        )
    }
// }
// export default AdminUsers;