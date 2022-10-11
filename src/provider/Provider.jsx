import React, {useState} from 'react';
import MissionContext from '../context/Context'

const MissionProvider = (props) => {
    const [mission, setMission] = useState({
        mName: 'Sakti',
        mCode: '190923',
        mStatus: 'Deactivated'
    });
    return (
        <MissionContext.Provider
        value = {{
            mDetails: mission,
            startMission: () => setMission({
                ...mission,
                mStatus: 'Activated'
            })
        }}
        >
            {props.children}
        </MissionContext.Provider>
    )
}

export default MissionProvider