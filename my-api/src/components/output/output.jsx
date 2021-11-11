import React from "react";
import {Table} from "react-bootstrap";


const Output =(props)=>{
    return(
        <div>
        <Table striped bordered hover>
          <tbody>
              <tr>
                  <td className="cell-width bg-success" align="left">Title</td>
                  <td className="text-wrap"  align="left">{props.object}</td>

              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >GENRE</td>
                  <td className="text-wrap"  align="left">{props.genre}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >YEAR</td>
                  <td className="text-wrap"  align="left">{props.year}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >SEASONS</td>
                  <td className="text-wrap"  align="left">{props.season}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left">IMDB</td>
                  <td className="text-wrap"  align="left">{props.imdb}</td>

              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >RUNTIME</td>
                  <td className="text-wrap"  align="left">{props.runtime}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >PLOT</td>
                  <td className="text-wrap"  align="left">{props.plot}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left">DIRECTOR</td>
                  <td className="text-wrap"  align="left">{props.director}</td>

              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >ACTORS</td>
                  <td className="text-wrap"  align="left">{props.actors}</td>
              </tr>
              <tr>
                  <td className="cell-width bg-success" align="left" >COUNTRY</td>
                  <td className="text-wrap"  align="left">{props.country}</td>
              </tr>
            </tbody>
        </Table>
            <div>
                <img
                    src={props.img}
                    alt={props.object}
                />
            </div>
        </div>
    );
}

export default Output;


