import React from "react";
import Autocomplete from "./Autocomplete";
import { Maybe } from "../../types";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { IAutoCompleteOption } from "./Autocomplete.types";
import { Icon } from "../Icon";
export default {
  title: "Autocomplete",
  component: Autocomplete,
};

export const AutocompleteStory = () => {
  const [selectedOption, setSelected] = React.useState<
    Maybe<IAutoCompleteOption<HTMLElement>>
  >(null);
  return (
    <div style={{ padding: 10 }}>
      <Typography variant={TypographyVariant_ENUM.h3}>Autocomplete</Typography>
      <Autocomplete
        id={"autocomplete-story"}
        options={[
          {
            label: "Bitcoin",
            value: "BTC",
            icon: () => (
              <Icon
                src={"/crypto-logos/btc.svg"}
                width={22}
                height={22}
                alt={"bitcoin logo"}
                aria-hidden={"true"}
              />
            ),
          },
          {
            label: "Ethereum",
            value: "ETH",
            icon: () => (
              <Icon
                src={"/crypto-logos/eth.svg"}
                width={22}
                height={22}
                alt={"Ethereum logo"}
                aria-hidden={"true"}
              />
            ),
          },
          {
            label: "Binance Coin",
            value: "BNB",
            icon: () => (
              <Icon
                src={"/crypto-logos/bnb.svg"}
                width={22}
                height={22}
                alt={"BNB logo"}
                aria-hidden={"true"}
              />
            ),
          },
        ]}
        selectedOption={selectedOption}
        onSelection={setSelected}
        aria-label={"Cryptocurrencies combobox"}
      />

      <div aria-hidden={true}>
        <Typography variant={TypographyVariant_ENUM.h5}>
          Selected option Label: {selectedOption?.label}
        </Typography>
        <br />
        <Typography variant={TypographyVariant_ENUM.h5}>
          Selected option value: {selectedOption?.value}
        </Typography>
      </div>
    </div>
  );
};
