

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-red-100"
        onClick={onClick}
      />
    );
}

export default NextArrow