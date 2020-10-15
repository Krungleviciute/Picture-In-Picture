const videoElement = document.getElementById('video');
const openButton = document.getElementById('open-button');
const startButton = document.getElementById('start-button');

//Prompt to select media stream, pass to video element, then play

const selectMediaStream = async () => {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(err) {
        console.log("Something went wrong", err)
    }
}

startButton.addEventListener('click', async () => {
    //Disable Button when on click
    startButton.disabled = true;

    await videoElement.requestPictureInPicture();

    //Reset the button
    startButton.disabled = true;

});

openButton.addEventListener('click', () => {
    openButton.disabled = true;

    selectMediaStream()

    //Reset the button
    openButton.disabled = true;
})

