import React from 'react'

function Toggle( {toggleOn = true, triggerToggle, text = 'toggle', className = ""} ) {
  return (
    <div className={`form-check form-switch ${className}`} onClick={triggerToggle}>
        <input className="form-check-input" type="checkbox" role="switch" readOnly id={`flexSwitchCheckCheckedFor${text.split(' ').join('')}`} checked={toggleOn} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{text}</label>
    </div>
  )
}

export default Toggle