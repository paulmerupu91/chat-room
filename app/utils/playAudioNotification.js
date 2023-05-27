import { debounce } from 'throttle-debounce';

export const playAudioNotification = debounce(
    300,
    () => {
        const elAudio = document.getElementById( 'notification-audio' );
        if( elAudio ){
            elAudio.play();
        }
    }
)