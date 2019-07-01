import reducer from '../src/reducers/robot';

describe('Reducers - Robot', () => {
  it('Should return initial state', () => {
    const stateExpected = {x: 0, y: 0, facing: 'N'};
    const result = reducer(undefined, {});
    expect(result).toEqual(stateExpected);
  });

  it('Should init our robot', () => {
    const iS = {x: 0, y: 0, facing: 'N'};
    const myRobot = {x: 4, y: 3, facing: 'E'};
    const action = {
      type: 'INIT_ROBOT',
      myRobot,
    };
    const result = reducer(iS, action);
    expect(result).toEqual(myRobot);
  });

  describe.skip('Robot - Moves', () => {
    it('Should move to the north', () => {
      const iS = {x: 0, y: 0, facing: 'N'};
      const action = { type: 'MOVE' };
      const expectedResult = {x: 0, y: 1, facing: 'N'};
      const result = reducer(iS, action);
      expect(result).toEqual(expectedResult);
    });
  
    it('Should move to the south', () => {
      const iS = {x: 3, y: 4, facing: 'S'};
      const action = { type: 'MOVE' };
      const expectedResult = {x: 3, y: 3, facing: 'S'};
      const result = reducer(iS, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('Robot - Turns', () => {
    it('Should turn to the right', () => {
      const iS = {x: 2, y: 2, facing: 'N'};
      const action = { type: 'TURN_LEFT' };
      const expectedResult = {x: 2, y: 2, facing: 'W'};
      const result = reducer(iS, action);
      expect(result).toEqual(expectedResult);
    });
  });
});