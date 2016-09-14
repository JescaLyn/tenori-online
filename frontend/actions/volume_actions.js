export const VolumeConstants = {
  CHANGE_VOLUME: "CHANGE_VOLUME"
};

export const changeVolume = volume => ({
  type: VolumeConstants.CHANGE_VOLUME,
  volume
});
