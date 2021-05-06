const AddItemsAutomatically = ({addItemsAutomatically, handleAddItemsAutomatically}) => {

return(
<div className = "notifsAndSlider">

<span className = "notifs">
Smart Grocery List is {!addItemsAutomatically && <span>not</span>} marking items when their timer runs out.
</span> 

<label onClick = {(e) => handleAddItemsAutomatically(e)} className="switch">
        <input checked = {addItemsAutomatically} type="checkbox"/>
        <span className="slider round"></span>
</label>

</div>
)
}

export default AddItemsAutomatically;