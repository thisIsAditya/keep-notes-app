import SideBar from 'components/SideBar';
import styled from 'styled-components';

const StyledContent = styled('div')(() => ({
  position: 'fixed',
  left: '5vw',
}));

const Layout = Comp => {
  return (
    <div>
      <SideBar />
      <StyledContent>
        <Comp />
      </StyledContent>
    </div>
  );
};

export default Layout;
