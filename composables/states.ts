// search Modal state
export const useSearchModal = () =>
  useState<boolean>("isSearchOpen", () => false);
// Nav drawer state
export const useShowNavDrawer = () =>
  useState<boolean>("navDrawer", () => false);
