import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0" style={{marginRight: "10%"}}>
                            <h2 className="footer-heading">? עדיין נשארו שאלות</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon fa fa-map" /><span className="text">תל אביב, ישראל</span></li>
                                    <li><a href="#"><span className="icon fa fa-phone" /><span className="text">03-9658542</span></a></li>
                                    <li><a href="#"><span className="icon fa fa-paper-plane" /><span className="text">info@petwize.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0" style={{marginRight: "10%"}}>
                            <h2 className="footer-heading">קישורים</h2>
                            <ul className="list-unstyled">
                                <li><a href="/" className="py-2 d-block">בית</a></li>
                                <li><a href="/profile" className="py-2 d-block">פרופיל</a></li>
                                <li><a href="/pets" className="py-2 d-block">חיות</a></li>
                                <li><a href="/adoptionsGallery" className="py-2 d-block">ימי אימוץ</a></li>
                                <li><a href="/articles" className="py-2 d-block">כתבות</a></li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">עלינו</h2>
                            <p>עוזרים לאוהבי החיות למצוא את כל המידע הדרוש במקום אחד</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;