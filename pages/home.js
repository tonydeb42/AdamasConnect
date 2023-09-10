import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProfileComp from '../components/dashboard/dashboardComp';

const Profile = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto" style={{ backgroundColor: "black", borderRight: "2px silver solid" }}>
                    <Navbar />
                </div>
                <div className="col" style={{ padding: "0" }}>
                    <ProfileComp />
                </div>
            </div>
        </div>
    );
};

export default Profile;

export async function getServerSideProps(context) {
    const { req, res } = context;
    if (!req.cookies.token) {
        res.setHeader('location', "/verify");
        res.statusCode = 302;
    }
    return {
        props: {}
    };
};
