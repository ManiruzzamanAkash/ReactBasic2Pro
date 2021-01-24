import React, { useEffect } from 'react';

const Test = (props) => {
    console.log(props);

    const changeProgrammingLanguage = (index) => {
        // delete that props.pl[index]
        const programmingLangs = props.pl.filter((item, idx) => index !== idx);
        props.setProgrammingLanguages(programmingLangs)
    }

    return (
        <div>
            <h2>Hello {props.name}</h2>
            <div>
                <address>
                    Village - {props.myAddress.village} <br/>
                    City - {props.myAddress.city} <br/>
                    Country - {props.myAddress.country} <br/>
                </address>

                <div>
                    <button onClick={props.changeCityFromParent}>
                        Change City
                    </button>
                    <button onClick={() => props.changeCityFromParentDynamic('Child')}>
                        Change City Dynamic
                    </button>
                  
                </div>

                <div>
                    <h5>Programming Languages</h5>
                    {
                        props.pl.map((p, index) => (
                            <li key={index} onClick={() => changeProgrammingLanguage(index)}>{p}</li>
                        ))
                    }
                      {/* <button onClick={() => props.setProgrammingLanguages(['GoLang', 'PHP', 'Javascript'])}>
                        Change Language
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default Test;