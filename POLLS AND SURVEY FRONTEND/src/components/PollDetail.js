import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";

const PollDetail = () => {
    const { id } = useParams();
    const [poll, setPoll] = useState(null);

    useEffect(() => {
        axios.get(`/api/polls/${id}`).then((res) => setPoll(res.data));
    }, [id]);

    const vote = (optionIndex) => {
        axios.post(`/api/polls/vote/${id}`, { optionIndex }).then((res) => setPoll(res.data));
    };

    return poll ? (
        <div>
            <h2>{poll.question}</h2>
            <div>
                {poll.options.map((option, index) => (
                    <button key={index} onClick={() => vote(index)}>
                        {option.text}
                    </button>
                ))}
            </div>
            <Bar
                data={{
                    labels: poll.options.map((o) => o.text),
                    datasets: [
                        {
                            label: "Votes",
                            data: poll.options.map((o) => o.votes),
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{ responsive: true }}
            />
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default PollDetail;
