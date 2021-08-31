import React from 'react'

export default function SimpleRadioField(props) {
  const { input, name, options } = props
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      {options.map((op, index) => (
        <label key={index} className="btn btn-warning btn-confirm-custom">
          <input
            type="radio"
            name={name}
            autoComplete="off"
            value={op.value}
            checked={input.value}
            onChange={(value) => input.onChange(value)}
          />
          &nbsp;
          <span>{op.label}</span>
        </label>
      ))}
    </div>
  )
}
