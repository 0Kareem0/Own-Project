document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const audioElement = document.getElementById('bg-music');
    const musicToggleBtn = document.getElementById('music-toggle');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    // Variables to track state
    let isPlaying = false;
    let userInteracted = false;

    // Function to toggle play/pause
    function togglePlay() {
        if (!userInteracted) {
            userInteracted = true;
        }

        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
            updateButtonState();
        } else {
            const playPromise = audioElement.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        isPlaying = true;
                        updateButtonState();
                    })
                    .catch(error => {
                        console.error('Error playing audio:', error);
                        alert('Could not play the audio. Please try again.');
                    });
            }
        }
    }

    // Function to update button state
    function updateButtonState() {
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }

    // Try to autoplay the audio on page load
    audioElement.autoplay = true;
    const autoPlayAttempt = audioElement.play();
    if (autoPlayAttempt !== undefined) {
        autoPlayAttempt
            .then(() => {
                isPlaying = true;
                updateButtonState();
                console.log("Autoplay succeeded.");
            })
            .catch(error => {
                console.warn("Autoplay failed, user interaction required.");
                // Don't show alert here – wait for manual click
            });
    }

    // Event listeners
    musicToggleBtn.addEventListener('click', togglePlay);

    // Handle audio end (in case loop is removed later)
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        updateButtonState();
    });

    // Handle audio errors
    audioElement.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        alert('There was an error with the audio playback. Please check if the audio file exists and try again.');
        isPlaying = false;
        updateButtonState();
    });



// Function to update button state and song name
function updateButtonState() {
    const songDisplay = document.getElementById('current-song');

    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        songDisplay.textContent = 'GEMINI AALIYAH - ＢＬＥＥＤ';
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        songDisplay.textContent = 'Not listening to anything right now';
    }
}


    // Debug message
    console.log('Audio player initialized and ready.');
});
