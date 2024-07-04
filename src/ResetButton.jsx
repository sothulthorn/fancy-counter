import { ResetIcon } from '@radix-ui/react-icons';

const ResetButton = ({ setCount }) => {
  const handleClick = (event) => {
    setCount(0);

    event.currentTarget.blue();
  };

  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={handleClick} />
    </button>
  );
};

export default ResetButton;
