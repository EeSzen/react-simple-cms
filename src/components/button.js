function Button(props) {
  const { color, size, label, onClick, icon, icon2, m } = props;
  // define a name to use props
  let btnClass = "btn";
  let iconClass = "bi";
  let iconClass2 = "bi";

  // button color
  if (color === "red") {
    btnClass += " btn-danger";
  } else if (color === "blue") {
    btnClass += " btn-primary";
  } else if (color === "green") {
    btnClass += " btn-success";
  } else if (color === "grey") {
    btnClass += " btn-secondary";
  } else if (color === "yellow") {
    btnClass += " btn-warning";
  } else if (color === "link") {
    btnClass += " btn-link";
  }

  // button size
  if (size === "small") {
    btnClass += " btn-sm";
  } else if (size === "large") {
    btnClass += " btn-lg";
  }

  // button margin
  if (m === "1") {
    btnClass += " me-1";
  } else if (m === "2") {
    btnClass += " me-2";
  } else if (m === "3") {
    btnClass += " me-3";
  } else if (m === "4") {
    btnClass += " me-4";
  } else if (m === "5") {
    btnClass += " me-5";
  }

  // left & single icon button
  if (icon === "arrow-left-circle") {
    iconClass += " bi-arrow-left-circle";
  } else if (icon === "arrow-left") {
    iconClass += " bi-arrow-left";
  } else if (icon === "eye") {
    iconClass += " bi-eye";
  } else if (icon === "pencil") {
    iconClass += " bi-pencil";
  } else if (icon === "trash") {
    iconClass += " bi-trash";
  } else if (icon === "key") {
    iconClass += " bi-key";
  }

  // right icon button
  if (icon2 === "arrow-right-circle") {
    iconClass2 += " bi-arrow-right-circle";
  } else if (icon2 === "arrow-right") {
    iconClass2 += " bi-arrow-right";
  }

  // call out all the stuff
  return (
    <button className={btnClass} onClick={onClick}>
      <i className={iconClass}></i> {label} <i className={iconClass2}></i>
    </button>
  );
}

export default Button;
