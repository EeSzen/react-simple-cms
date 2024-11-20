function Badge(props) {
    const {color , label= "empty"} = props;
    let badgeClass = "badge";

    if(color === "green"){
        badgeClass += " bg-success";
    }else if(color === "yellow"){
        badgeClass += " bg-warning";
    }else if(color === "turquoise"){
        badgeClass += " bg-info";
    }else if(color === "blue"){
        badgeClass += " bg-primary";
    }


  return (
    <div>
      {/* <span className="badge bg-warning">Pending Review</span>
      <span className="badge bg-success">Publish</span>
      <span className="badge bg-info">Editor</span> */}
      <span className={badgeClass}>{label}</span>
    </div>
  );
}
export default Badge;
