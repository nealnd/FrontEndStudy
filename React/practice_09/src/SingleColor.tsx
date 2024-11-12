import { Bounce, toast } from "react-toastify";

interface SingleColorProps {
  precentValue: number;
  rgb: string;
  hex: string;
  index: number;
}

const SingleColor: React.FC<SingleColorProps> = ({
  precentValue,
  rgb,
  hex,
  index,
}) => {
  const handleClick = () => {
    toast.success(`Color copied to clipboard!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(hex);
  };
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `${rgb}` }}
      onClick={handleClick}
    >
      <p className="percent-value">{precentValue}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
export default SingleColor;
