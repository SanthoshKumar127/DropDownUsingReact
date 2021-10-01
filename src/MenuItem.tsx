type MenuItemProps = {
  children: string;
  isActive?: boolean;
  onLinkClick: (selectedTitle: string) => void;
};
 
function MenuItem({ children, isActive, onLinkClick }: MenuItemProps) {
  return (
    <li
      onClick={() => {
        onLinkClick(children);
      }}
    >
      {isActive ? <strong>{children}</strong> : children}
    </li>
  );
}
 
export default MenuItem;