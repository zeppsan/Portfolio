

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " bg-red-400"}
        style={{ ...style}}
        onClick={onClick}
      />
    );
}

export default PrevArrow