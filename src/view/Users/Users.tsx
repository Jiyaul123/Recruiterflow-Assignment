import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserService } from '../../services/User.service';
import UserCard from '../../components/Cards/User.card';
import AddUserModal from '../../components/Modal/AddUser.modal';


export default function Users() {

    const [userData, setUserData] = useState<any>();
    const [showAddUserModal, setShowAddUserModal] = useState<boolean>(false)

    const getAllUsers = async () => {
        await UserService.getAllUsers().then((res) => {
            if (res.status === 200) {
                setUserData(res.data)
                console.log(res)
            }
        }).catch(err => {
            toast.error(err || "Something went wrong")
        })
    }

    useEffect(() => {
        getAllUsers();
    }, [])

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
                                <div key={index} className="mb-3">
                                    <UserCard data={user} reload={getAllUsers} />
                                </div>
                            )
                        }) : "No data found."}
                    </Col>
                </Row>
            </div>

            <AddUserModal
                show={showAddUserModal}
                handleClose={() => setShowAddUserModal(false)}
                reload={getAllUsers}
            />
        </>
    )
}
