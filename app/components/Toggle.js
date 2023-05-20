import React from 'react'

function Toggle( {toggleOn = true, triggerToggle, text = 'toggle', className = "", children} ) {
  return (
    <div className={`form-check form-switch ${className}`} onClick={triggerToggle}>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{ children || text }</label>
        <input className={`form-check-input ${toggleOn && `border border-secondary bg-secondary`} `} type="checkbox" role="switch" readOnly id={`flexSwitchCheckCheckedFor${text.split(' ').join('')}`} checked={toggleOn} />
    </div>
  )
}

export default Toggle