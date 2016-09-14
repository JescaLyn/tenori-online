export const SpeedConstants = {
  CHANGE_SPEED: "CHANGE_SPEED"
};

export const changeSpeed = speed => ({
  type: SpeedConstants.CHANGE_SPEED,
  speed
});
