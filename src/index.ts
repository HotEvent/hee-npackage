export class RegExp {
    constructor(public regString: string, public flags?: string) {}
    exec() {}
    test(input: string) {
      const regString = this.regString;
      let matchSuccess = false;
      let regLength = regString.length;
      let regIndex = 0;
      let inputLength = input.length;
      let inputIndex = 0;
      while (inputIndex < inputLength && matchSuccess === false) {
        const char = input[inputIndex];
        const regParten = regString[regIndex];
        if (char === regParten) {
          if (regIndex === regLength - 1) {
            matchSuccess = true;
          } else {
            regIndex++;
            inputIndex++;
          }
        } else {
          regIndex = 0;
          inputIndex++;
        }
      }
      return matchSuccess;
    }
  }
  