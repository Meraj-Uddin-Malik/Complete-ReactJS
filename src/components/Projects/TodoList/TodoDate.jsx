import { useEffect } from "react";

export const TodoDate = ({ dateTime }) => {

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
} 