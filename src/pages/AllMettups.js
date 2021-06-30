import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';
import MeetupItem from "../components/meetups/MeetupItem";

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    const auxUrl = 'https://react-getting-started-56fbe-default-rtdb.firebaseio.com/meetups.json';
    
    useEffect( () => {
        setIsLoading(true);
        fetch(auxUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const meetupList = [];
            for (const key in data)
            {
                const meetupItem = {
                    id: key,
                    ...data[key]
                }

                meetupList.push(meetupItem);
            }
            setIsLoading(false);
            setLoadedMeetups(meetupList);
        });
    }, []);
    
    if (isLoading)
    {
        return (
            <section>
                <p>Loading data ....</p>
            </section>
        );
    }
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    );
}

export default AllMeetupsPage;