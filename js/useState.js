export function useState(initialValue) {
  let _value = initialValue;

  function setValue(newValue) {
    if (typeof newValue !== "function") {
      _value = newValue;
    } else {
      _value = newValue(_value);
    }
  }

  function getValue() {
    return _value;
  }

  return [getValue, setValue];
}
