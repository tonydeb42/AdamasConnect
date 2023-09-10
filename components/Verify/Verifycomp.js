import React, { useState } from 'react';
import styles from './Verifycomp.module.css';
import Image from 'next/image';
import logo from '../../assets/connect_logo.png';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


const Verifycomp = () => {
    const [isLogged, setIsLogged] = useState(false);
    const defaultData = {
        name: "",
        stream: "",
        semester: "",
        email: "",
        password: ""
    };
    const [userData, setUserData] = useState(defaultData);

    const changeHandler = (value, id) => {
        if (id == "name") {
            setUserData((prev) => {
                return ({
                    ...prev,
                    name: value
                })
            })
        }
        else if (id == "stream") {
            setUserData((prev) => {
                return ({
                    ...prev,
                    stream: value
                });
            })
        }
        else if (id == "semester") {
            setUserData((prev) => {
                return ({
                    ...prev,
                    semester: value
                });
            })
        }
        else if (id == "email") {
            setUserData((prev) => {
                return ({
                    ...prev,
                    email: value
                });
            })
        }
        else if (id == "password") {
            setUserData((prev) => {
                return ({
                    ...prev,
                    password: value
                });
            })
        }
    };

    const [isSuccess, setIsSuccess] = useState(false);
    const [msg, setMsg] = useState();
    const router = useRouter();

    const submitHandler = async (e) => {
        e.preventDefault();
        const finalData = {
            ...userData,
            isLogged: isLogged
        }
        const res = await axios.post("/api/auth/verify", finalData);
        if (res.data.success) {
            setUserData(defaultData);
            setIsSuccess(true);
            setMsg(res.data.message);
            Cookies.set("token", res.data.token, { expiresIn: "3h" });
            localStorage.setItem("user", res.data.user);
            router.push('/home');
        }
        else {
            setMsg(res.data.message);
        }
    };

    const signup = (
        <>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.name} onChange={(e) => { changeHandler(e.target.value, "name") }} autoComplete='off' required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Stream</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.stream} onChange={(e) => { changeHandler(e.target.value, "stream") }} autoComplete='off' required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Semester</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.semester} onChange={(e) => { changeHandler(e.target.value, "semester") }} autoComplete='off' required />
            </div>
        </>
    );
    return (
        <div className={styles.verifycontainer} style={{ backgroundColor: "black" }}>
            <div>
                <center><Image src={logo} alt="connect_logo" style={{ height: "200px", width: "200px" }} /></center>
                <center className='mt-3'><h1 className={styles.title}>{isLogged ? "Login" : "Sign Up"}</h1></center>
                <center>{msg && <p style={{ color: isSuccess ? "green" : "red" }}>{msg}</p>}</center>
                <div className="card mx-auto mt-3" style={{ width: "22rem" }}>
                    <div className="card-body">
                        <form method="post" onSubmit={submitHandler}>
                            {!isLogged && signup}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} onChange={(e) => { changeHandler(e.target.value, "email") }} autoComplete='off' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={userData.password} onChange={(e) => { changeHandler(e.target.value, "password") }} autoComplete='off' required />
                            </div>
                            <center><button type="submit" className="btn btn-lg btn-primary">{isLogged ? "Log In" : "Submit"}</button></center>
                        </form>
                    </div>
                </div>
                {isLogged ? <p className={styles.p}>New Here ? <a onClick={() => { setIsLogged(false) }} className={styles.a}>Create account</a></p> : <p className={styles.p}>Have an account with us ? <a onClick={() => { setIsLogged(true) }} className={styles.a}>Login now</a></p>}
            </div>
        </div>
    )
}


export default Verifycomp;
