interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Car implements Radio {
  switchRadio() {}
}

class CellPhone implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}

class CellPhoneV2 implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
