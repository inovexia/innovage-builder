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
import BuilderSlider from './components/BuilderSlider';
import ServiceWheel from './components/ServiceWheel';
import PremiumServiceWheel from './components/PremiumServiceWheel';

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

Builder.registerComponent(BuilderSlider, {
  name: 'Builder Slider',
  inputs: [
    {
      name: 'slides',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png', 'webp'],
        },
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
        { name: 'textColor', type: 'color' },

        //NEW FIELDS FOR OVERLAY
        {
          name: 'overlayColor',
          type: 'color',
          friendlyName: 'Overlay Color',
          defaultValue: 'rgba(0,0,0,0.5)',
        },
        {
          name: 'overlayOpacity',
          type: 'number',
          friendlyName: 'Overlay Opacity (0–1)',
          defaultValue: 0.5,
          min: 0,
          max: 1,
        },

        // Existing per-slide css
        {
          name: 'titleCss',
          type: 'longText',
        },
        {
          name: 'subtitleCss',
          type: 'longText',
        },
        {
          name: 'buttonCss',
          type: 'longText',
          friendlyName: 'Button CSS (per-slide)',
          helperText:
            'Paste CSS declarations such as font-size: 20px; padding: 14px 30px;',
          defaultValue: '',
        },

        // Button fields
        { name: 'buttonText', type: 'text' },
        { name: 'buttonLink', type: 'url' },
        { name: 'buttonBg', type: 'color' },
        { name: 'buttonColor', type: 'color' },
      ],
    },

    // Toggles
    { name: 'showArrows', type: 'boolean', defaultValue: true },
    { name: 'showDots', type: 'boolean', defaultValue: true },
    {
      name: 'autoplay',
      type: 'boolean',
      friendlyName: 'Enable Autoplay',
      defaultValue: false,
    },

    {
      name: 'autoplayDelay',
      type: 'number',
      friendlyName: 'Autoplay Delay (ms)',
      defaultValue: 3000,
      showIf: (options) => {
        return String(options.autoplay) === true;
      },
    },

    {
      name: 'transitionSpeed',
      type: 'number',
      friendlyName: 'Slide Speed (ms)',
      defaultValue: 600,
      helperText: 'Example: 600 = 0.6 seconds',
    },

    {
      name: 'dotsPosition',
      type: 'text',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    {
      name: 'contentPosition',
      type: 'text',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    { name: 'sliderHeight', type: 'text', defaultValue: '500px' },
    { name: 'sliderWidth', type: 'text', defaultValue: '100%' },
    {
      name: 'contentWidth',
      type: 'text',
      friendlyName: 'Content Width',
      defaultValue: '600px',
      helperText: 'Example: 500px, 60%, 40rem',
    },
  ],
});

Builder.registerComponent(ServiceWheel, {
  name: 'Service Wheel',
  inputs: [
    { name: 'size', type: 'number', defaultValue: 360 },
    { name: 'centerTitleTop', type: 'string', defaultValue: 'PREMIUM' },
    { name: 'centerTitleBottom', type: 'string', defaultValue: 'SERVICE' },
    {
      name: 'segments',
      type: 'list',
      subFields: [
        { name: 'color', type: 'color', defaultValue: '#2bb07f' },
        { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'jpg'] },
        { name: 'label', type: 'text' },
        { name: 'link', type: 'url' },
      ],
      defaultValue: [],
    },
  ],
});

Builder.registerComponent(PremiumServiceWheel, {
  name: 'Premium Service Wheel',
  inputs: [
    { name: 'size', type: 'number', defaultValue: 520 },
    { name: 'centerTop', type: 'string', defaultValue: 'PREMIUM' },
    { name: 'centerBottom', type: 'string', defaultValue: 'SERVICE' },
    {
      name: 'centerTopColor',
      type: 'color',
      defaultValue: '#777',
    },
    {
      name: 'centerBottomColor',
      type: 'color',
      defaultValue: '#222',
    },
    {
      name: 'centerTopSize',
      type: 'number',
      defaultValue: 26,
    },
    {
      name: 'centerBottomSize',
      type: 'number',
      defaultValue: 46,
    },

    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'number', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'string', type: 'longText' },
        { name: 'color', type: 'color' },
        { name: 'icon', type: 'file', allowedFileTypes: ['svg', 'png', 'jpg'] },
      ],
    },
  ],
});
