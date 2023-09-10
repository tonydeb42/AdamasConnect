import dynamic from 'next/dynamic';

const Verifycomp = dynamic(() => import('../components/Verify/Verifycomp'), { ssr: false })

const verify = () => {
    return (
        <Verifycomp />
    )
}

export default verify;

export async function getServerSideProps(context) {
    const { req, res } = context;
    if (req.cookies.token) {
        res.setHeader('location', "/home");
        res.statusCode = 302;
    }
    return {
        props: {}
    };
};