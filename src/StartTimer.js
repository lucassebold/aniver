import App from "./App";

const startTimer = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    interval = setInterval(() => {
        const countDownDate = new Date("Dec 14,2022").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance <= 0) {
            // Stop Timer
            clearInterval(interval.current);
        } else {
            // Update Timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    });
    return (
        <div>
            <App
                distance={distance}
            />
        </div>
    );
};

export default startTimer;