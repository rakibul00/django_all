import React from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    // Formatting time to show in hours, minutes, seconds, and AM/PM
    const formatTime = (date) => {
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    };
    return (
        <div>
            <div id='#times' className="flex items-center justify-center h-screen bg-gray-800 text-white">
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-6xl font-bold mb-4">Current Time</h1>
                    <p className="text-4xl font-mono">
                        {formatTime(currentTime)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Time;