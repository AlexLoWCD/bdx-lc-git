const initialState = {x: 0, y: 0, facing: 'N'};

const robot = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_ROBOT': {
      const robot = { ...action.robot };
      return robot;
    }
    case 'MOVE': {
      const robot = { ...state };
      if (robot.facing === 'N') {
        robot.y += 1;
      }
      if (robot.facing === 'S') {
        robot.y -= 1;
      }
      return robot;
    }
    case 'TURN_LEFT': {
      const robot = { ...state };
      if(robot.facing === 'N') {
        robot.facing = 'W';
      }
      return robot;
    }
    default:
      return state;
  }
}

export default robot;
