import MissionContext from "../context/Context"
import MissionProvider from "../provider/Provider";

const MissionOne = () => {
    return (
      <MissionContext.Consumer>
        {(context) => (
          <>
            <h1>Mission Name: {context.mDetails.mName}</h1>
            <h1>Mission Code: {context.mDetails.mCode}</h1>
            <h1>Mission Status: {context.mDetails.mStatus}</h1>
            <button onClick={context.startMission}>Change Status</button>
          </>
        )}
      </MissionContext.Consumer>
    );
}
const Mission = () => {
    return (
      <MissionProvider>
        <MissionOne />
      </MissionProvider>
    )
}

export default Mission