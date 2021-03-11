import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import styled from "styled-components";
import {
  filterCountriesByRegion,
  searchCountries,
  initializeCountries,
  addLoader,
  removeLoader,
} from "../actions";
import * as Yup from "yup";
import UseSvg from "../helpers/UseSvg";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  search: Yup.string().required(),
});

const initialValues = {
  search: "",
};

const Input = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 1.8rem 7.4rem;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: 600;
  transition: 0.4s background-color;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};
  @media only screen and (max-width: 680px) {
    font-size: 1.3rem;
    padding: 1.8rem 3.4rem;
  }
  &::placeholder {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.darkgray};
    font-family: ${({ theme }) => theme.fonts.nunito};
    @media only screen and (max-width: 680px) {
      font-size: 1.3rem;
    }
  }
`;

const DropDownMenuBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.8rem 2.4rem;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  width: 15.625%;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  transition: 0.4s background-color;
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};

  @media only screen and (max-width: 1100px) {
    padding: 1.8rem 2rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 20.625%;
  }
  @media only screen and (max-width: 770px) {
    width: 30.625%;
  }
  @media only screen and (max-width: 550px) {
    width: 53.3%;
  }
  @media only screen and (max-width: 320px) {
    width: 65.3%;
  }
`;

const DropDownContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow {
    width: 20px;
    height: 20px;
    transition: 0.5s all;
  }
  .up {
    transform: rotate(180deg);
  }
`;

const FilterPar = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 600;
  @media only screen and (max-width: 110rem) {
    font-size: 1.3rem;
  }
`;

const Formm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .trash {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: -30%;
    top: 1.5rem;

    transition: 0.5s all;
    cursor: pointer;
    stroke: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.black};
    @media only screen and (max-width: 770px) {
      left: -20%;
    }
    @media only screen and (max-width: 550px) {
      left: 140%;
    }
    @media only screen and (max-width: 420px) {
      left: 150%;
    }
    @media only screen and (max-width: 380px) {
      left: 160%;
    }
  }
`;

const InputWrapper = styled(motion.div)`
  width: 37.5%;
  position: relative;
  @media only screen and (max-width: 770px) {
    width: 47.5%;
  }
  @media only screen and (max-width: 550px) {
    width: 92%;
    margin-bottom: 4rem;
  }
  .search {
    width: 1.75rem;
    height: 1.75rem;
    stroke: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.darkgray};
    position: absolute;
    left: 3.2rem;
    top: 1.72rem;
    transition: 0.4s stroke;
    @media only screen and (max-width: 680px) {
      left: 1rem;
    }
  }
`;

const Menu = styled(motion.ul)`
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  list-style: none;
  position: absolute;
  height: 0;
  left: 0;
  top: 6rem;
  width: 0;
  border-radius: 5px;
  padding: 1.6em 2.4rem;
  transition: 0.5s all;
  z-index: 1000;
  transform: translateY(-3rem);
  opacity: 0;
`;

const MenuItem = styled(motion.li)`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 8px;
  cursor: pointer;
`;

const TrashWrapper = styled(motion.div)``;

const FormSection = ({
  filterCountriesByRegion,
  searchCountries,
  initializeCountries,
  darkMode,
  addLoader,
  removeLoader,
  setVisible,
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const menuItems = [
    {
      id: 0,
      name: "Africa",
    },
    {
      id: 1,
      name: "Americas",
    },
    {
      id: 2,
      name: "Asia",
    },
    {
      id: 3,
      name: "Europe",
    },
    {
      id: 4,
      name: "Oceania",
    },
  ];

  const onMenuItemClick = (e, props) => {
    addLoader();
    filterCountriesByRegion(e.target.innerText).then(removeLoader);
    setSelectedFilter(e.target.innerText);
    setOpened(!opened);
    props.resetForm();
    setVisible(8);
  };

  const menuItemVariants = {
    initial: {
      opacity: 0,
      y: -20,
      transition: {
        delay: 0.4,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const renderMenuItems = (props) => {
    return menuItems.map((menuItem) => {
      return (
        <MenuItem
          $darkmode={darkMode}
          onClick={(e) => onMenuItemClick(e, props)}
          key={menuItem.id}
          variants={menuItemVariants}
        >
          {menuItem.name}
        </MenuItem>
      );
    });
  };

  const onMenuClick = () => {
    setOpened(!opened);
  };

  const onClearClick = (props, e) => {
    e.stopPropagation();
    addLoader();
    initializeCountries().then(removeLoader);
    props.resetForm();
    setSelectedFilter(null);
    setVisible(8);
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      height: "16.4rem",
      width: "100%",
      top: "9rem",
      y: -25,
      transition: {
        duration: 0.05,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: "0rem",
      width: 0,
      transition: {
        height: { delay: 0.1 },
        width: { delay: 0.1 },
      },
    },
  };

  const trashVariants = {
    initial: {
      opacity: 0,
      x: -10,
      y: -20,
    },
    animate: {
      opacity: 1,
      x: -40,
      y: -20,

      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <Formm
            onChange={(e) => searchCountries(e.target.value)}
            selectedfilter={selectedFilter}
            $darkmode={darkMode}
          >
            <InputWrapper $darkmode={darkMode}>
              <UseSvg id="search" className="search" />
              <Input
                name="search"
                placeholder="Search for a country…"
                $darkmode={darkMode}
              />
            </InputWrapper>

            <DropDownMenuBox
              $darkmode={darkMode}
              onClick={(e) => onMenuClick(e, props)}
            >
              <AnimatePresence>
                {selectedFilter && (
                  <TrashWrapper
                    variants={trashVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <UseSvg
                      id="trash"
                      className="trash"
                      onClick={(e) => onClearClick(props, e)}
                    />
                  </TrashWrapper>
                )}
              </AnimatePresence>
              <DropDownContentWrapper opened={opened}>
                <FilterPar>
                  {selectedFilter ? selectedFilter : `Filter by Region`}
                </FilterPar>
                <UseSvg
                  id="down"
                  className={`arrow ${opened ? "up" : "down"}`}
                />
              </DropDownContentWrapper>
              <AnimatePresence>
                {opened && (
                  <Menu
                    className="dropdown__list"
                    opened={opened}
                    $darkmode={darkMode}
                    variants={menuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {renderMenuItems(props)}
                  </Menu>
                )}
              </AnimatePresence>
            </DropDownMenuBox>
          </Formm>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, {
  filterCountriesByRegion,
  searchCountries,
  initializeCountries,
  addLoader,
  removeLoader,
})(FormSection);
