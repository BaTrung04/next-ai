import TopBar from "@/components/TopBar";

const DashBoardLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      {props.children}
    </>
  );
};

export default DashBoardLayout;
