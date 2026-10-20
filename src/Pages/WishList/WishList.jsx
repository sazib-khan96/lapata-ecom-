import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getProductData } from "../../Utility/utility";

const WishList = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((products) => setproduct(products));
  }, []);

  const wishList = getProductData();
  const WishListProduct = product.filter((item) => wishList.includes(item.id));

  return (
    <div className="mt-8">
      <Tabs>
        <TabList>
          <Tab>My Product : {WishListProduct.length}</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        
        {WishListProduct.map((pro) => (
          <TabPanel>
            <h2>{pro.name}</h2>
          </TabPanel>
        ))}

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WishList;
