import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import BrandItem from "./BrandItem";

//observer
import { observer } from "mobx-react";

//stores
import brandStore from "../../stores/brandStore";

//styles
import { ListWrapper } from "./styles";
const BrandList = ({ navigation }) => {
  if (brandStore.loading) return <Spinner />;
  const brandList = brandStore.brands.map((brand) => (
    <BrandItem brand={brand} key={brand.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{brandList}</List>
    </ListWrapper>
  );
};

export default observer(BrandList);
