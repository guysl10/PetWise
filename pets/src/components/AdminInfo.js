import React, { Component } from 'react';
import InfoTableRow from './InfoTableRow';

export default function AdminInfo({ page }) {

    return (
        <>
            <br />
            <hr />
            {/* search */}
            <div className="header-left" style={{ padding: '1% 2.5%' }}>
                <div className="menu-icon dw dw-menu" />
                <div className="search-toggle-icon dw dw-search2" data-toggle="header_search" />
                <div className="header-search">
                    <form>
                        <div className="form-group mb-0">
                            <i className="dw dw-search2 search-icon" />
                            <input type="text" className="form-control search-input" placeholder="Search Here" />

                        </div>
                    </form>
                </div>
            </div>

            {/* results box */}
            <div className="card-box mb-30" style={{ padding: '1% 2.5%' }}>
                <h2 className="h4 pd-20">Next Items Were Found: </h2>
                <table className="data-table table nowrap">
                    <thead>
                        <tr>
                            <th className="table-plus datatable-nosort">Product</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Breed</th>
                            <th>Association</th>
                            <th className="datatable-nosort">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <InfoTableRow />
                        <InfoTableRow />
                        <InfoTableRow />
                        <InfoTableRow />

                    </tbody>
                </table>
            </div>


        </>


    );
}