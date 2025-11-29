"use client";
import { builder, Builder } from "@builder.io/react";
import { FaCode, FaMobileAlt, FaLaptop, FaTools } from 'react-icons/fa'; 
import Counter from "./components/Counter/Counter";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Loader from "./components/Loader";
import Page from "./app/[...builder]/page";
import ProductGrid from "./components/ProductGrid";

import ProductRegister from "./components/Product/ProductRegister";
import ProductSlider from "./components/Product/ProductSlider";
import StatamicProduct from "./components/StatamicProduct";
import MegaMenuList from "./components/MegaMenuList";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
  inputs: [
    {
      name: "heading",
      type: "text",
      defaultValue: "All Products",
    },
  ],
});

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
});


Builder.registerComponent(Page, {
  name: "Page",
});

Builder.registerComponent(Loader, {
  name: "Loader",
});

Builder.registerComponent(Builder, {
  name: "Builder",
});


Builder.registerComponent(ProductRegister, {
  name: "ProductRegister",
});

Builder.registerComponent(StatamicProduct, {
  name: "StatamicProduct",
});

Builder.registerComponent(ProductSlider, {
  name: "ProductSlider",
  inputs: [
    { name: "thumbnail", type: "text", friendlyName: "Thumbnail URL" },
    {
      name: "images",
      type: "list",
      subFields: [{ name: "image", type: "text" }],
    },
  ],
});

Builder.registerComponent(LanguageSwitcher, {
  name: "LanguageSwitcher",
});

Builder.registerComponent(MegaMenuList, {
  name: 'MegaMenuList',
  inputs: [
    {
      name: 'itemsPerColumn',
      type: 'number',
      defaultValue: 4,
      required: true,
      helperText: 'How many items should appear in the first column?',
    },
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'label', type: 'text', required: true },
        { name: 'link', type: 'url', required: true },
        { name: 'icon', type: 'text', defaultValue: '›' },
      ],
    },
  ],
});
