import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    let auxContent;

    if (favoritesCtx.totalFavorites === 0)
    {
        auxContent = <p>You got no favorites yet. Start adding some?</p>
    } else {
        auxContent = <MeetupList meetups={favoritesCtx.favorites}/>;
    }

    return (
        <div>
            <h1>My Favorites</h1>
            {auxContent}
        </div>
    );
}

export default FavoritesPage;