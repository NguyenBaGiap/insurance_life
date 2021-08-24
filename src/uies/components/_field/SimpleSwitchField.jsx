import React from 'react'
import Toggle from 'react-toggle'

export default function SimpleSwitchField(props) {
  return (
    <label className="d-flex">
      <Toggle
        checked={props.input.value}
        onChange={props.input.onChange}
        icons={false}
      />
      <span className="pl-3 custom-label-toggle">{props.label}</span>
    </label>
  )
}
