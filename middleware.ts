import { withAuth } from "next-auth/middleware";
export default withAuth({
    // Only protect paths under /dashboard (or change as needed)
    pages: {
        signIn: "/",
    },
});
// Add matching config
export const config = {
    matcher: ["/dashboard/:path*"], // protect /dashboard and subpages
};