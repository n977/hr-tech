import "./layout.css";
import { ApolloWrapper } from "@/components/apolloWrapper";
import { AuthWrapper } from "@/components/authWrapper";
import { Header } from "@/components/app";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden bg-blue-100">
        <ApolloWrapper>
          <AuthWrapper>
            <Header />
            {children}
          </AuthWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
