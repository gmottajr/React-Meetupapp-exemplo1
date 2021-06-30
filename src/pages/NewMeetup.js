import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupPage() {
    const history = useHistory();
    
    function addMeetupHandler(meetupData){
        const auxUrl = 'https://react-getting-started-56fbe-default-rtdb.firebaseio.com/meetups.json';
        
        fetch(auxUrl, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {'Content-Type': 'application/json'}
        }).then(() => {
            history.replace('/');
        });
        console.log('Dados foi ...', meetupData)
    }

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm />
        </section>
    );
}

export default NewMeetupPage;