import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Image from 'next/image';
import check from '../../assets/check.png';

const Reportcomp = () => {
    const [reportData, setReportData] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [ticket, setTicket] = useState("123");
    const changeHandler = (value) => {
        setReportData(value);
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const report = {
            user: localStorage.getItem("user"),
            data: reportData
        };
        const res = await axios.post("/api/report", report);
        if (res.data.success) {
            setReportData("");
            setTicket(res.data.id);
            setIsSuccess(true);
        }
    };
    const beforeSuccess = (
        <>
            <h1 className='text-center position-relative' style={{ top: "35px", color: "white" }}>Report</h1>
            <div className='row'>
                <div className="alert mt-5 mx-auto col-lg-4 col-sm-12" role="alert" style={{ backgroundColor: "#0E21A0", color: "white" }}>
                    <div className='row'>
                        <div className='col-1 d-flex align-items-center'><i className={`fa fa-info`}></i>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className='col'><span>Please enter your grievances below. Our admin will contact you soon. Please note the ticket ID for future reference.</span></div>
                    </div>
                </div>
            </div>
            <form method='post' onSubmit={submitHandler}>
                <div className='row mt-5'>
                    <div className="form-floating col-lg-6 mx-auto">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "250px" }} required autoComplete='off' onChange={(e) => { changeHandler(e.target.value) }} value={reportData}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2 mx-auto'>
                        <button className='btn btn-primary mt-4' style={{ width: "100%" }}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    ); const afterSuccess = (
        <div className='text-center d-flex flex-column text-white' style={{ height: '100vh' }}>
            <div className='my-auto'>
                <Image src={check} style={{ height: "130px", width: "130px" }} className='mb-5' />
                <h1>Your complaint was registered successfully.</h1>
                <p className='mt-4'>Your Ticket ID is <b>{ticket}</b></p>
            </div>
        </div>
    );
    return (
        <div className='container-fluid' style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
            {isSuccess ? afterSuccess : beforeSuccess}
        </div>
    )
}

export default Reportcomp;