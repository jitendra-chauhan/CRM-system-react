export function DeshBoardContent(props: any) {
  const style = {
    width: "270px",
    height: "109px",
    margin: "100px",
    padding: "30px",
    border: "5px solid black",
  };
  return (
    <div style={style}>
      <h2>Total User : {props?.UserCount ? props?.UserCount : 0} </h2>
    </div>
  );
}
