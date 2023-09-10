import React from 'react';
import img from '../assets/404.svg';
import Image from 'next/image';
import Link from 'next/link';

const errorStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    content: {
        textAlign: 'center',
    },
    image: {
        maxWidth: '80%',
        height: 'auto',
    },
    title: {
        fontSize: '2rem',
        margin: '1rem 0',
        color: '#333',
    },
    text: {
        fontSize: '1rem',
        margin: '0.5rem 0',
        color: '#666',
    },
    link: {
        display: 'inline-block',
        fontSize: '1rem',
        marginTop: '1rem',
        textDecoration: 'none',
        color: '#007bff',
    },
    linkHover: {
        textDecoration: 'underline',
    },
};

const Error404 = () => {
    return (
        <div style={errorStyles.container}>
            <div style={errorStyles.content}>
                <Image
                    src={img}
                    alt="Page Not Found"
                    style={errorStyles.image}
                />
                <h1 style={errorStyles.title}>You came to the wrong place</h1>
                <p style={errorStyles.text}>
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link href="/" style={errorStyles.link}>
                    Go back
                </Link>
            </div>
        </div>
    );
};

export default Error404;
