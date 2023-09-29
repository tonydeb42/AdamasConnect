import Homecomp from "../components/Home/Homecomp";

export default function Home() {
  return <Homecomp />;
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  if (req.cookies.token) {
    res.setHeader("location", "/home");
    res.statusCode = 302;
  }
  return {
    props: {},
  };
}
