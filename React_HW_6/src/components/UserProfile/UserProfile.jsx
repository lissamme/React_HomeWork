import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './UserProfile.module.css';

function UserProfile() {
    const [user, setUser] = useState(null);

    async function fetchUser() {
        try {
        const response = await axios.get("https://randomuser.me/api/");
        setUser(response.data.results[0]);
        } catch (error) {
        console.error(error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.card}>
            <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
            className={styles.image}
            />
            <h2 className={styles.name}>
                {user.name.first} {user.name.last}
            </h2>
            <p className={styles.email}>Email: {user.email}</p>
            <p className={styles.email}>Phone: {user.phone}</p>
            <button onClick={fetchUser} className={styles.button}>
                Load New User
            </button>
        </div>
    );
}

export default UserProfile;