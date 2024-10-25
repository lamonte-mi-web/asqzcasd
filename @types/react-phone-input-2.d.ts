declare module "react-phone-input-2" {
  import * as React from "react";

  export interface CountryData {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes?: string[];
  }

  export interface PhoneInputProps {
    country?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    inputClass?: string;
    buttonClass?: string;
    preferredCountries?: string[];
  }

  const PhoneInput: React.FC<PhoneInputProps>;
  export default PhoneInput;
}
