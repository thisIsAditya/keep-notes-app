import { Drawer } from "@mui/material";

const SideBar = () => {
  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    />
  );
};

SideBar.propTypes = {};

export default SideBar;
