import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Link } from "react-router-dom";

export const Heros = () => {

    const { authState } = useOktaAuth();

    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                nesciunt tenetur cupiditate omnis atque. Eveniet amet ex, beatae
                                tempora corrupti numquam veritatis natus, deserunt ipsum hic
                            </p>
                            {authState?.isAuthenticated ?
                                <Link type="button" className="btn main-color btn-lg text-white" to='search'>
                                    Explore top books
                                </Link>
                                :

                                <Link to='/login' className="btn btn-outline-success">
                                    Sign up
                                </Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our collection always changing</h1>
                            <p className="lead">Lorem, ipsum dolor citationem qui aliquid, quis error repellendu
                                s recusandae inventore praesentium vitae sapiente eaque non. Porro, asperiores!
                                inventore praesentium vitae sapiente eaque non. Porro, asperior</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>
            {/**Mobile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left">
                        </div>
                        <div className="mt-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                nesciunt tenetur cupiditate omnis atque. Eveniet amet ex, beatae
                                tempora corrupti numquam veritatis natus, deserunt ipsum hic
                            </p>
                            {authState?.isAuthenticated ?
                                <Link type="button" className="btn main-color btn-lg text-white" to='search'>
                                    Explore top books
                                </Link>
                                : <Link to="/login" className="btn btn-outline-success">
                                    Sign up
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection always changing</h1>
                            <p className="lead">Lorem, ipsum dolor citationem qui aliquid, quis error repellendu
                                s recusandae inventore praesentium vitae sapiente eaque non. Porro, asperiores!
                                inventore praesentium vitae sapiente eaque non. Porro, asperior</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
