import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <>
                <div className="card-box mb-30" style={{ padding: "5% 8%" }}>
                    <h2 className="h4 pd-20" style={{ textAlign: "right" , paddingBottom:"1.5%"}}>: תוצאות חיפוש</h2>
                    <table className="data-table table">
                        <thead>
                            <tr>
                                <th>מעבר לפריט</th>
                                <th>תיאור</th>
                                <th>תמונה</th>
                                <th className="table-plus">כותרת</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="www.google.co.il" className="mr-2">www.yad4.co.il</a></td>
                                <td>jhkhjkhjhjhjklllllllllll</td>
                                <td className="table-plus">
                                    <img src="../assets/images/image_5.jpg" width={70} height={70} alt="" />
                                </td>
                                <td>סקיי מחפשת בית חדש</td>
                            </tr>
                            <tr>
                                <td><a href="www.google.co.il" className="mr-2">www.ynet.co.il</a></td>
                                <td>jhkhjkhjhjhjklllllllllll</td>
                                <td className="table-plus">
                                    <img src="../assets/images/image_5.jpg" width={70} height={70} alt="" />
                                </td>
                                <td>יום אימוץ בשלישי הקרוב </td>
                            </tr>
                            <tr>
                            <td><a href="www.google.co.il" className="mr-2">www.yad4.co.il</a></td>
                                <td>jhkhjkhjhjhjklllllllllll</td>
                                <td className="table-plus">
                                    <img src="../assets/images/image_5.jpg" width={70} height={70} alt="" />
                                </td>
                                <td>שירותי וטרינריה חדשים בעיר</td>
                            </tr>
                            <tr>
                            <td><a href="www.google.co.il" className="mr-2">www.yad4.co.il</a></td>
                                <td>jhkhjkhjhjhjklllllllllll</td>
                                <td className="table-plus">
                                    <img src="../assets/images/image_5.jpg" width={70} height={70} alt="" />
                                </td>
                                <td>יום אימוץ בשלישי הקרוב </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default Search;