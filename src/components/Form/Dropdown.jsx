import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as ArrowIcon } from "../../static/images/downarrow.svg";
import { ReactComponent as TrashIcon } from "../../static/images/trash.svg";
import { AnimatePresence } from "framer-motion";
import { trashVariants, menuVariants } from "./FormAnimations";
import {
  MenuItem,
  FilterPar,
  DropDownMenuBox,
  DropDownContentWrapper,
  TrashWrapper,
  Menu,
} from "./FormStyles";
import { menuItems } from "./formData";
import { menuItemVariants } from "./FormAnimations";
import detectOutsideClick from "../../hooks/detectOutsideClick";

const Dropdown = ({
  darkMode,
  setCountryFilter,
  setVisible,
  countryFilter,
}) => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  const clickedOutside = detectOutsideClick(menuRef, open);
  useEffect(() => {
    if (clickedOutside) setOpen(false);
  }, [clickedOutside, setOpen]);
  const renderMenuItems = () => {
    return menuItems.map((menuItem) => {
      return (
        <MenuItem
          $darkmode={darkMode}
          onClick={(e) => onMenuItemClick(e)}
          key={menuItem.id}
          variants={menuItemVariants}
        >
          {menuItem.name}
        </MenuItem>
      );
    });
  };

  const onMenuClick = () => {
    setOpen(true);
  };

  const onClearClick = (e) => {
    e.stopPropagation();
    setCountryFilter("");
    setVisible(8);
  };

  const onMenuItemClick = (e) => {
    setCountryFilter(e.target.innerText);
    setOpen(!open);
    setVisible(8);
  };
  return (
    <DropDownMenuBox $darkmode={darkMode} onClick={(e) => onMenuClick(e)}>
      <AnimatePresence>
        {countryFilter && (
          <TrashWrapper
            variants={trashVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TrashIcon className="trash" onClick={onClearClick} />
          </TrashWrapper>
        )}
      </AnimatePresence>
      <DropDownContentWrapper opened={open}>
        <FilterPar>
          {countryFilter ? countryFilter : `Filter by Region`}
        </FilterPar>

        <ArrowIcon className={`arrow ${open ? "up" : "down"}`} />
      </DropDownContentWrapper>
      <AnimatePresence>
        {open && (
          <Menu
            className="dropdown__list"
            opened={open}
            ref={menuRef}
            $darkmode={darkMode}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderMenuItems()}
          </Menu>
        )}
      </AnimatePresence>
    </DropDownMenuBox>
  );
};

export default Dropdown;
// git commit -m "V2 of application. API updated. Complete Redux Store Redesign. Huge performance improvement with Redux Toolkit. Folder structures and Code Allocation redesigned"
