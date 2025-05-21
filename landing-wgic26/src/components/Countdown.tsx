import { useEffect, useState } from "react";

const Countdown = () => {
    const targetDate = new Date("2026-10-27T00:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            id="countdown"
            className="flex text-4xl bg-cactus text-white w-full h-auto py-24 md:py-32 justify-center"
        >
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center md:justify-center">
                <div className="text-sm text-cement">Starting in:</div>
                <div className="flex gap-2">
                    {timeLeft.days}
                    <strong>d</strong>
                </div>
                <div className="flex gap-2">
                    {String(timeLeft.hours).padStart(2, "0")}
                    <strong>h</strong>
                </div>
                <div className="flex gap-2">
                    {String(timeLeft.minutes).padStart(2, "0")}
                    <strong>m</strong>
                </div>
                <div className="flex gap-2">
                    {String(timeLeft.seconds).padStart(2, "0")}
                    <strong>s</strong>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
