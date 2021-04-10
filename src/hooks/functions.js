import Item from "../components/Item"

export const ShowItems = (itemRootState,showModal,isSearch = false)=>{
    if (Array.isArray(itemRootState) && itemRootState.length >= 1) {
            return  itemRootState.map((item,index)=>{
                return <Item key={index} id={item._id} onClick={(e)=>showModal(e,item)} name={item.name} link={item.linkPreview} img={item.screen}/>
            })
    }else{
        return (
            <h1>
            {(isSearch === false)?`Aucun template n'est disponible pour l'instant`:'Aucun résultat pour votre récherche'}
            </h1>
        )
    }
}