import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BsExclamationTriangle } from 'react-icons/bs'

interface ConfirmationModalProps {
    show: number,
    handleClose: () => void
    onClick: (id:number) => void
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
    return (
        <Modal
            show={props.show ? true : false}
            onHide={props.handleClose}
            backdrop="static"
            animation={true}
            centered
        >
            <Modal.Body>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p className="icon-button delete-icon" title="Delete">
                        <BsExclamationTriangle size={40} />
                    </p>
                    <div className='text-secondary'>Are you sure you want to delete this data</div>
                    <div className='text-secondary'>This action cannot be undone</div>
                </div>
                <div className='d-flex flex-column gap-2 mt-4'>
                <Button  variant='danger' className="w-100" onClick={() => props.onClick(props.show)}>Delete</Button>
                <Button variant='outline-secondary' className="w-100" onClick={props.handleClose}>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
