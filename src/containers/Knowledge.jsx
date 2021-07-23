import { div } from 'prelude-ls'
import React from 'react'
import '../styles/knowledge.css'

export default () => {
    const knowledges1 = ["Api Rest", "Automatización Industrial", "AWS", "Css", "Docker", "Express", 
    "Git y Github", "Html"]
    
    const knowledges2 = ["Javascript", "Microsoft Azure", "Mocha", "MongoDB", "NodeJS", "Postgres",
    "ReactJS", "React-Native"]
    const knowledges3 = ["Redux", "Sass", "SQL", "Sequelize", "Postman", "Python"]

    return(
        <div className="recuadro separacion">
            <div id="conocimientos"><h3>CONOCIMIENTOS</h3></div>
            <div className="row">
                <div className="col-sm-4"><ul>
                    {knowledges1.map(knowledge1 => <li>{knowledge1}</li>)}
                </ul></div>

                <div className="col-sm-4 center"><ul>
                    {knowledges2.map(knowledge2 => <li>{knowledge2}</li>)}
                </ul></div>

                <div className="col-sm-4"><ul>
                    {knowledges3.map(knowledge3 => <li>{knowledge3}</li>)}
                </ul></div>
            </div>
        </div>
    )
}