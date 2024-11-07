import Header from "../Components/Header/Header"
import BodyList from "../Components/BodyList/BodyList"

function List() {
  return (
    <>
      <Header></Header>
      <div style={{width: "100vw", display: "flex", justifyContent: "center"}}>
        <BodyList></BodyList>
      </div>
    </>
  )
}

export default List
