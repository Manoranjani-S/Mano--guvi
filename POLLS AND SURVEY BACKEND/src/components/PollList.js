import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PollList = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        axios.get("/api/polls").then((res) => setPolls(res.data));
    }, []);

    return (
        <div>
            <h1>Polls</h1>
            {polls.map((poll) => (
                <div key={poll._id}>
                    <h3>{poll.question}</h3>
                    <Link to={`/poll/${poll._id}`}>View Poll</Link>
                </div>
            ))}
        </div>
    );
};

export default PollList;
