import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import Image from "next/image";
type Props = {
    session: Session;
};
export default function Dashboard({ session }: Props) {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Dashboard</h1>
            <p>Welcome, {session.user?.name}</p>
            <Image src={session.user?.image || ""} alt="Avatar" width={50} height={50} />
            <p>Email: {session.user?.email}</p>
        </div>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: { session },
    };
};