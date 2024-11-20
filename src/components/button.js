function Button(props) {
  const { color, size, label, onClick, icon ,icon2 ,m} = props;
  let btnClass = "btn";
  let iconClass = "bi";
  let iconClass2 = "bi";

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

  if (size === "small") {
    btnClass += " btn-sm";
  } else if (size === "large") {
    btnClass += " btn-lg";
  }

  if (m === "1"){
    btnClass += " me-1"
  }else if(m === "2"){
    btnClass += " me-2"
  }else if(m === "3"){
    btnClass += " me-3"
  }else if(m === "4"){
    btnClass += " me-4"
  }else if(m === "5"){
    btnClass += " me-5"
  }


  if (icon === "arrow-left-circle") {
    iconClass += " bi-arrow-left-circle";
  } else if (icon === "arrow-right-circle") {
    iconClass += " bi-arrow-right-circle";
  }else if (icon === "arrow-left") {
    iconClass += " bi-arrow-left";
  }else if (icon === "arrow-right") {
    iconClass += " bi-arrow-right";
  }else if(icon === "eye"){
    iconClass += " bi-eye"
  }else if(icon === "pencil"){
    iconClass += " bi-pencil"
  }else if(icon === "trash"){
    iconClass += " bi-trash"
  }else if(icon === "key"){
    iconClass += " bi-key"
  }

  if (icon2 === "arrow-left-circle") {
    iconClass2 += " bi-arrow-left-circle";
  } else if (icon2 === "arrow-right-circle") {
    iconClass2 += " bi-arrow-right-circle";
  }else if (icon2 === "arrow-left") {
    iconClass2 += " bi-arrow-left";
  }else if (icon2 === "arrow-right") {
    iconClass2 += " bi-arrow-right";
  }

  return (
    <button className={btnClass} onClick={onClick}>
      <i className={iconClass}></i> {label} <i className={iconClass2}></i>
    </button>
  );
}

export default Button;
