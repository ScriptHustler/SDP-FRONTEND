import "../styles/dashboard.css";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../endpoints/api";

function MemberDashboard() {
  const [loading, setLoading] = useState(true)
    const [bio, setBio] = useState('')
    const [profile_picture, setProfileimage] = useState('')
    const [following_count, setfollowing] = useState(0)
    const [follower_count, setFollowers] = useState(0)

    const get_username_from_url = () => {
        const url_split = window.location.pathname.split('/')
        return url_split[url_split.length - 1]
    }
    const [username, setUsername] = useState(get_username_from_url())

    useEffect(() => {
        setUsername(get_username_from_url())
    }, [])

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const data = await get_user_profile_data(username)
                console.log(data)
                setBio(data.bio)
                setProfileimage(data.profile_picture)
                setfollowing(data.following_count)
                setFollowers(data.follower_count)
                follower_count(data.follower_count)
            } catch {
                console.log('error')
            } finally {
                setLoading(false)
            }
        }
        fetch_data()
    }, [])


    return (
        <>
            <Header />
            <div className="dashboard">

                <LeftSidebar 
                loading={loading} 
                bio = {bio}
                profile_picture = {profile_picture}
                following_count={following_count}
                follower_count={follower_count}
                username={username}
                
                />
                <main className="feed">
                    <h2>Recent Posts</h2>
                    <Post />
                    <Post />
                </main>
                <RightSidebar />
            </div>

        </>
    );
}

export default MemberDashboard;
