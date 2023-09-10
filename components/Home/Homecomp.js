import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';
import logo from '../../assets/connect_logo.png';

const homecomp = () => {
    return (
        <div className={`card text-center ${styles.container}`}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className='body'>
                    <Image src={logo} alt="adamas_connect_logo" style={{ height: "200px", width: "200px" }} />
                    <h1 className={styles.title}>Welcome to Adamas Connect</h1>
                    <p className={styles.description}>
                        Connect with friends, share moments, and explore the world together.
                    </p>
                    <Link href="/verify" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default homecomp;
