import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { UserService } from '../services/User.service';
import UserCard from '../components/Cards/User.card';
import AddUserModal from '../components/Modal/AddUser.modal';
import toast from 'react-hot-toast';
import Users from './Users/Users';


export default function ViewIndex() {

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
        <Users />
    )
}
