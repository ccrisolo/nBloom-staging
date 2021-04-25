import { Modal } from 'react-bootstrap'

function _Modal({ children, show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} bsPrefix="border-radius modal" contentClassName="br overflow-hidden">
            {children}
        </Modal>
    )
}

export default _Modal
