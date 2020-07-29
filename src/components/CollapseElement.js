import React, { useState } from "react"
import { Button, Collapse } from "react-bootstrap"

function CollapseElement({ content, title, source, site }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        style={{ width: "100%" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn btn-light"
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>{title}</div>
      </Button>
      <Collapse in={open}>
        <div className="container pt-3 bg-light" id="example-collapse-text">
          {content}
          <div className="pt-2 justify-content-around d-flex">
            <div>
              {source && (
                <a href={source} className="text-secondary font-weight-bold">
                  Source
                </a>
              )}
            </div>
            <div>
              {site && (
                <a href={site} className="text-secondary font-weight-bold">
                  Site
                </a>
              )}
            </div>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default CollapseElement
