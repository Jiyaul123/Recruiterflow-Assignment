import React, { useEffect, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { UserService } from '../../services/User.service';
import toast from 'react-hot-toast';

interface EditUserProps {
    show: boolean;
    handleClose: () => void;
    reload: () => void;
    data: any;
}

export default function EditUserModal({ show, handleClose, reload, data }: EditUserProps) {
    const [formData, setFormData] = useState<any>({});

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: any) => ({
            ...prev,
            address: {
                ...prev.address,
                [e.target.name]: e.target.value,
            },
        }));
    };

    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: any) => ({
            ...prev,
            company: {
                ...prev.company,
                [e.target.name]: e.target.value,
            },
        }));
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, username, phone } = formData || {};

        if (!name || !email || !username || !phone) {
            toast.error("Name, Email, Username, and Phone are required.");
            return;
        }

        try {
            await UserService.updateUserById(formData?.id, formData); 
            toast.success("User updated successfully!");
            handleClose();
            reload();
        } catch (error) {
            toast.error("Failed to update user.");
            console.error(error);
        }
    };

    useEffect(() => {
        if (show && data) {
            setFormData(data);
        }
    }, [show, data]);

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Update User</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={formData?.name || ''} onChange={handleValueChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={formData?.username || ''} onChange={handleValueChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData?.email || ''} onChange={handleValueChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phone" value={formData?.phone || ''} onChange={handleValueChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData?.company?.name || ''}
                            onChange={handleCompanyNameChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control name="website" value={formData?.website || ''} onChange={handleValueChange} />
                    </Form.Group>

                    <hr />
                    <h6 className="mt-3">Address</h6>

                    <Form.Group className="mb-2">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            name="street"
                            value={formData?.address?.street || ''}
                            onChange={handleAddressChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Suite</Form.Label>
                        <Form.Control
                            name="suite"
                            value={formData?.address?.suite || ''}
                            onChange={handleAddressChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            name="city"
                            value={formData?.address?.city || ''}
                            onChange={handleAddressChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control
                            name="zipcode"
                            value={formData?.address?.zipcode || ''}
                            onChange={handleAddressChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Update User
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
