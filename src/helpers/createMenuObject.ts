type IMenuOptions = "" | "all" | "cat" | "fish" | "dog";

export const createMenuObject = (activeMenu: IMenuOptions) => {
  let menus = {
    all: false,
    cat: false,
    fish: false,
    dog: false,
  };

  if (activeMenu !== "") {
    menus[activeMenu] = true;
  }

  return menus;
};
