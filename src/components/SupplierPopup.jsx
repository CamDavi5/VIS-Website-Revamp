import React from 'react';

const SupplierPopup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="btn btn-secondary closeBtn" onClick={() => props.setTrigger(false)}>CLOSE</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default SupplierPopup;