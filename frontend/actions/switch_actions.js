export const SwitchConstants = {
  TOGGLE_SWITCH: "TOGGLE_SWITCH",
  CLEAR_SWITCHES: "CLEAR_SWITCHES"
};

export const toggleSwitch = (columnId, switchId) => ({
  type: SwitchConstants.TOGGLE_SWITCH,
  columnId,
  switchId
});

export const clearSwitches = () => ({
  type: SwitchConstants.CLEAR_SWITCHES
})
