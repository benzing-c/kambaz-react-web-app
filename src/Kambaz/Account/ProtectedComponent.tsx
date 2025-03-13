import { useSelector } from "react-redux";
export default function ProtectedComponent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY") {
    return children;
  } else {
    return;
}}
