import { Drawer } from "@mui/material";

const SideBar = () => {
  return (
    <Drawer variant="persistant" anchor="left" PaperProps={{ elevation: 2 }} />
  );
};

SideBar.propTypes = {};

export default SideBar;
