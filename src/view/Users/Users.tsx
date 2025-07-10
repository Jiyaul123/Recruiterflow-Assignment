import { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserService } from '../../services/User.service';
import UserCard from '../../components/Cards/User.card';
import AddUserModal from '../../components/Modal/AddUser.modal';
import { motion } from 'framer-motion';


export default function Users() {

    const [userData, setUserData] = useState<any>();
    const [showAddUserModal, setShowAddUserModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)


    const getAllUsers = async () => {
        setLoading(true);
        await UserService.getAllUsers().then((res) => {
            if (res.status === 200) {
                setUserData(res.data)
            }
        }).catch(err => {
            toast.error(err || "Something went wrong");
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    if (loading) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" variant="dark" />
                <p className='mt-2'>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <Row className="justify-content-center mt-4">
                    <Col md={10}>
                        <div className='d-flex justify-content-between align-items-center mb-5'>
                            <div className="border-bottom border-4 p-2 h4">
                                <div >Users</div>
                            </div>
                            <Button size="sm" variant="outline-dark" onClick={() => setShowAddUserModal(true)}>Add User</Button>
                        </div>
                        {userData && userData?.length > 0 ? userData?.map((user: any, index: number) => {
                            return (
                                <motion.div
                                    key={user.id}
                                    className="mb-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <UserCard
                                        data={user}
                                        userData={userData}
                                        setUserData={setUserData}
                                    />
                                </motion.div>
                            )
                        }) : "No data found."}
                    </Col>
                </Row>
            </div>

            <AddUserModal
                show={showAddUserModal}
                handleClose={() => setShowAddUserModal(false)}
                userData={userData}
                setUserData={setUserData}
            />
        </>
    )
}
