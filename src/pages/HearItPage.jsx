import React from "react";

import AudioButton from "../components/AudioButton";

function HearItPage() {
    return (
        <>
            <h1 className="title">Hear It</h1>
            <h1>It All Started Week 1 of 2016 vs Notre Dame</h1>
            <AudioButton name={'tibf_original_Tessitore.mp3'} />
            <h1>Sam's Proclamation at the 2018 Sugar Bowl</h1>
            <AudioButton name={'Ehlinger_Were_Back_Sugar_Bowl_2018.mp3'} />
            <h1>Any Doubts?</h1>
            <AudioButton name={'Brandon_Walker_tsb.mp3'} />
            <h1>Remember Week 2 of 2005?</h1>
            <AudioButton name={'Musberger_OU_UT_05_SweedTD.mp3'} />
        </>
    )
}

export default HearItPage