import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getProductData } from "../../Utility/utility";
import SelectWishList from "../../Component/SelectWishList/SelectWishList";

const WishList = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((products) => setproduct(products));
  }, []);

  const wishList = getProductData();
  const WishListProduct = product.filter((item) => wishList.includes(item.id));
  // console.log(WishListProduct)

  return (
    <div className="mt-8">
      <Tabs>
        <TabList>
          <Tab>My Product : {WishListProduct.length}</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          {WishListProduct.map((item) => (
            <SelectWishList item={item}></SelectWishList>
          ))}
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WishList;
