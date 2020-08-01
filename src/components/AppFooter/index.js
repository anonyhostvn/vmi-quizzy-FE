import React from 'react';
import {Link} from "react-router-dom";
import {routerDict} from "../../routers/app.router.config";
import {AppFooterWrapper} from "./appFooter.wrapper";
import {MailOutlined} from '@ant-design/icons';

const AppFooter = () => {
    return (
        <AppFooterWrapper>
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                            <h2 className={'header-text'}>Quizzy</h2>
                            <p className="pr-5 text-white-50"> Hệ thống làm bài thi online </p>
                            <p><a href="/#"><i className="fa fa-facebook-square mr-1"/></a><a href="/#"><i
                                className="fa fa-linkedin-square"/></a></p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3 header-text"> Liên kết </h4>
                            <ul className="m-0 p-0">
                                <li><Link to={routerDict.a1test}> Làm bài thi lái xe A1 </Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4 header-text"> Liên hệ </h4>
                            {/*<p className="mb-0"><i className="fa fa-phone mr-3"/>  </p>*/}
                            <p><i className="fa fa-envelope-o mr-3"/> <MailOutlined /> quizzyTeam@gmail.com </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppFooterWrapper>
    )
};

export default AppFooter;