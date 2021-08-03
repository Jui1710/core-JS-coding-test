/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if (typeof (seconds) === 'number') {
        const time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
        time.hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        time.minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        time.seconds = seconds;

        return time;
    } else {
        throw new Error('Invalid Input');
    }
};

module.exports = convertTime;
