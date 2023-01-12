type NavLinksProps = {
  href: string;
  text: string;
  setToggle: (prev: boolean) => void;
};

const NavLinks = (props: NavLinksProps) => {
  return (
    <div onClick={(prev) => props.setToggle(!prev)}>
      <a href={`#${props.href}`} className="text-xl">
        {props.text}
      </a>
    </div>
  );
};

export default NavLinks;
