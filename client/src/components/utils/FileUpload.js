import React from 'react'
import DropZone from 'react-dropzone'

function FileUpload() {
  return (
    <div style={{ display:'flex', justifyContent:'space-between'}}>
      <DropZone
      onDrop
      multiple
      maxSize
      >

        

      </DropZone>
    </div>
  )
}

export default FileUpload