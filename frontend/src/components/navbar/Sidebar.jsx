
const Sidebar = ({expandSide, setExpandSide}) => {
    
  return (
    <div className={`sidebar ${expandSide && 'expanded'}`}>
        {!expandSide && <p className='expand-arrow' onClick={() => setExpandSide(true)}><i className="fa-solid fa-angle-right"></i></p>}
    </div>
  )
}

export default Sidebar;