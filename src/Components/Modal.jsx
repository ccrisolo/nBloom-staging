import { Modal } from 'react-bootstrap'

function _Modal({ body, show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} bsPrefix="border-radius modal" contentClassName="br overflow-hidden">
            {body}
        </Modal>
    )
}

export default _Modal
