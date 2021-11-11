import React from "react";
import Search from "../search/search";
import './app.css'
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";



function App () {
    return (
        <Container fluid>
            <Row>
                <div className="badge bg-warning text-dark">
                    <h2 className='bg-success'>Film Info Searcher</h2>
                    <Search/>
                </div>
            </Row>
        </Container>

    )
}

export default App;
