import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import ConfirmationModal from '../Modal/Confirmation.modal'
import EditUserModal from '../Modal/EditUser.modal'


interface UserCardProps {
    data: any
    userData: any,
    setUserData: any
    // reload: () => void
}

export default function UserCard(props: UserCardProps) {

    const [showConfirmatiomModal, setShowConfirmationModal] = useState<any | undefined>(undefined);
    const [userIndex, setUserIndex] = useState<number>(-1);


    const handleDeleteUserDataLocally = (id: number) => {
        const filteredUsers = props.userData.filter(user => user.id !== id);
        props.setUserData(filteredUsers);
        setShowConfirmationModal(undefined); 
    };


    return (
        <React.Fragment>
            <Card className="modern-card p-4 shadow-sm" style={{ border: "none", outline: "none" }}>
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                    <span className="badge-pill project-pill">{props.data.username}</span>
                </div>


                <div className="user-info mb-3">
                    <div><strong>Name:</strong> {props.data.name}</div>
                    <div><strong>Email:</strong> {props.data.email}</div>
                    <div><strong>Phone:</strong> {props.data.phone}</div>
                    <div><strong>Address:</strong> {props.data.address.suite}, {props.data.address.street}, {props.data.address.city}, {props.data.address.zipcode}</div>
                    <div>
                        <a href={props.data.website} className="d-flex align-items-center gap-1" target='_blank'>
                            Visit Site
                            <FaExternalLinkAlt size={12} />
                        </a>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span className="badge-pill company-pill">Company: {props.data.company.name}</span>
                    <div className="d-flex gap-2">
                        {/* <span className="icon-button edit-icon" title="Edit" onClick={() => setUserIndex(props.data.id)}>
                            <AiFillEdit size={18} />
                        </span> */}
                        <span className="icon-button delete-icon" title="Delete" onClick={() => setShowConfirmationModal(props.data.id)}>
                            <FaRegTrashCan size={18} />
                        </span>
                    </div>
                </div>
            </Card>

            <ConfirmationModal
                show={showConfirmatiomModal}
                handleClose={() => setShowConfirmationModal(undefined)}
                onClick={handleDeleteUserDataLocally}
            />
        </React.Fragment>
    )
}
