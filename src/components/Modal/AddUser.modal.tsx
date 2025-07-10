import React, { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { UserService } from '../../services/User.service';
import toast from 'react-hot-toast';

interface EditUserProps {
    show: boolean;
    handleClose: () => void;
    userData:any
    setUserData: any
}

export default function AddUserModal({ show, handleClose, userData, setUserData }: EditUserProps) {
    const [formData, setFormData] = useState<any>();



    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let old_address = { ...formData?.address, [e.target.name]: e.target.value };
        setFormData({ ...formData, address: old_address })
    }

    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let old_company = { ...formData?.company, [e.target.name]: e.target.value };
        setFormData({ ...formData, company: old_company })
    }

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async () => {
        if (!formData?.name || !formData?.email || !formData?.username || !formData?.phone) {
            toast.error("Name, Email, Phone and Ussername is required.")
            return
        }
        const payload = {
            ...formData,
            id: userData?.length + 1
        }

        userData.push(payload)
        handleClose();
       
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add User</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" value={formData?.name} onChange={handleValueChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" value={formData?.username} onChange={handleValueChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData?.email} onChange={handleValueChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" value={formData?.phone} onChange={handleValueChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control name="name" value={formData?.company?.name} onChange={handleCompanyNameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Website</Form.Label>
                    <Form.Control name="website" value={formData?.website} onChange={handleValueChange} />
                </Form.Group>

                <hr />
                <h6 className="mt-3">Address</h6>

                <Form.Group className="mb-2">
                    <Form.Label>Street</Form.Label>
                    <Form.Control name="street" value={formData?.address?.street} onChange={handleAddressChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Suite</Form.Label>
                    <Form.Control name="suite" value={formData?.address?.suite} onChange={handleAddressChange} />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" value={formData?.address?.city} onChange={handleAddressChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control name="zipcode" value={formData?.address?.zipcode} onChange={handleAddressChange} />
                </Form.Group>

                <div>
                    <Button variant="primary" className='w-100' onClick={handleSubmit}>Add User</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
