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
                                <li><a href="/about" className="py-2 d-block">אודות</a></li>
                                <li><a href="/adoptionsGallery" className="py-2 d-block">אימוץ</a></li>
                                <li><a href="/articles" className="py-2 d-block">מאמרים</a></li>
                                <li><a href="/contact" className="py-2 d-block">צור קשר</a></li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">עלינו</h2>
                            <p>עוזרים לאוהבי החיות למצוא את כל המידע הדרוש במקום אחד</p>
                            <ul className="ftco-footer-social p-0">
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;