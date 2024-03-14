import Sidebar from "~/components/core/sidebar";

export default function LayoutProducts({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
