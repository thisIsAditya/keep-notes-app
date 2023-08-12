import { Drawer, styled, Typography } from '@mui/material';
import { priorityToDataMap } from 'constants';
import { leftbarWidth } from 'constants';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: leftbarWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: leftbarWidth,
    boxSizing: 'border-box',
    padding: theme.spacing(4, 2),
  },
}));

const SideBar = () => {
  return (
    <StyledDrawer variant="persistent" anchor="left" PaperProps={{ elevation: 2 }} open>
      <Typography variant="h2">TD</Typography>
      {Object.keys(priorityToDataMap).map(priority => (
        <Typography variant="body1">{priorityToDataMap[priority].variant}</Typography>
      ))}
    </StyledDrawer>
  );
};

SideBar.propTypes = {};

export default SideBar;
