import React from 'react'
import 'static/styles/_loading.scss'

export default function Loading({ visible }) {
  return visible === true ? (
    <div className="loading-root position-fixed">
      <div className="spinner-border progress" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : null
}
