import React from 'react';
import s from "./day17.module.css";
import Day16 from '../Day16';

const Day17 = () => {

    // const styles = {
    //     welcome : {
    //         fontSize: 80,
    //         fontWeight: 'bold',
    //         backgroundColor: '#0129012',
    //         textAlign: 'center'
    //     }
    // }

    return (
        <div className="container">
            <h2 className={s.welcome}>Day 17</h2>
            <button className="btn btn-primary btn-lg">
                Click Here...
            </button>

            <Day16 />
        </div>
    );
}

export default Day17;