type IconButtonProps = {
  icon: string;
  onClick: () => void;
};

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
};

export default IconButton;
