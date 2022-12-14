import React from "react";

// Styling
import "../styles/residents.css";
import "../styles/card.css"

// Querying
import { useQuery } from "@apollo/client";
import { content } from "../../gql/Query";
import ResidentCard from "./ResidentCard";

function ResidentCards() {
    const { loading, error, data } = useQuery(content);

    return (
        <div>

            {loading
                ? <p>Loading...</p>
                : error
                    ? <p>
                        Error: {error}
                    </p>
                    : <div className="container residents fade">
                        {data.residents.map((resident, index) =>
                            <ResidentCard
                                key={index}
                                resident={resident}
                            />
                        )}
                    </div>}
        </div>
    );
}

export default ResidentCards;
