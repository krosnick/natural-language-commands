import React from 'react';

export default function WebsiteEventListener(props){
    return (
        <div
            // onKeyDown
            // onKeyPress
            onKeyUp={(e) => props.handleEmbeddedWebsiteEvent(e)}
            onChange={(e) => props.handleEmbeddedWebsiteEvent(e)}
            onInput={(e) => props.handleEmbeddedWebsiteEvent(e)}
            onSubmit={(e) => props.handleEmbeddedWebsiteEvent(e)}
            onClick={(e) => props.handleEmbeddedWebsiteEvent(e)}
            // onInvalid
            // onReset
            // onContextMenu
            // onDoubleClick
            // onDrag
            // onDragEnd
            // onDragEnter
            // onDragExit
            // onDragLeave
            // onDragOver
            // onDragStart
            // onDrop
            // onMouseDown
            // onMouseEnter
            // onMouseLeave
            // onMouseMove
            // onMouseOut
            // onMouseOver
            // onMouseUp
        >
            {props.children}
        </div>
    );
};