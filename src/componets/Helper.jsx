

function Helper({path,title,className}) {
  return (
    <div className="flex items-center">
      <img src={path} alt="" className="mr-2" />
      <div className="font-general-sans text-[20px] font-medium leading-[27px] text-left " >
        <h6 className={className}>{title}</h6>
      </div>
    </div>
  )
}

export default Helper