import SideBar from 'components/SideBar';

const Layout = Comp => {
  return (
    <div>
      <SideBar />
      <div>
        <Comp />
      </div>
    </div>
  );
};

export default Layout;
