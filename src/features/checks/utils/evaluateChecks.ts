import { PlayerCheck } from "../types";

export const evaluateCheck = (
  check: PlayerCheck,
  inventory: string[],
): PlayerCheck => {
  const _check = { ...check };
  // Check if requirements met for check
  if (_check.requirements.length === 0 && !_check.isActive) {
    _check.isActive = true;
  }

  for (let i = 0; i < _check.requirements.length; i++) {
    const requirements = _check.requirements[i];
    _check.isActive = requirements.every((requirement) =>
      inventory.includes(requirement),
    );
    if (_check.isActive) {
      break;
    }
  }

  if (_check.peekRequirements) {
    if (_check.peekRequirements.length === 0) {
      _check.canPeek = true;
    }

    for (let i = 0; i < _check.peekRequirements.length; i++) {
      const requirements = _check.requirements[i];
      _check.canPeek = requirements.every((requirement) =>
        inventory.includes(requirement),
      );
      if (_check.canPeek) {
        break;
      }
    }
  }

  return _check;
};
