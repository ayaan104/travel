import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
type AuthLayoutProps = React.PropsWithChildren;

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await currentUser();

  if (user) {
    return redirect("/");
  }

  return <div>{children}</div>;
}
