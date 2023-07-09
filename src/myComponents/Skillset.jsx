import React from 'react'

export const Skillset = ({ details }) => {
    return (
        <div >
            <div className="skills-card">
                <img
                    className="skills-card-img"
                    src={details.img}
                    alt=""
                />
                <p className="skills-card-name">{ details.name}</p>
            </div>
        </div>
    )
}
