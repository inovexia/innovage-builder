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
import TestimonialSlider from './components/TestimonialSlider';
import PremiumTestimonialSlider from './components/PremiumTestimonialSlider';

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
      name: 'fontFamily',
      type: 'string',
      helperText: 'Enter font family (e.g. Inter, Poppins, Roboto)'
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

Builder.registerComponent(TestimonialSlider, {
  name: 'TestimonialSlider',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        { name: 'avatar', type: 'file' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'longText' },
        { name: 'role', type: 'text' },
        { name: 'stars', type: 'number', defaultValue: 5 },
      ],
    },
    { name: 'desktopItems', type: 'number', defaultValue: 3 },
    { name: 'tabletItems', type: 'number', defaultValue: 2 },
    { name: 'mobileItems', type: 'number', defaultValue: 1 },

    { name: 'starColor', type: 'color', defaultValue: '#f5b50a' },

    { name: 'cardShadow', type: 'boolean', defaultValue: false },
    { name: 'cardBorder', type: 'boolean', defaultValue: false },
    { name: 'cardBorderColor', type: 'color', defaultValue: '#ddd' },
    { name: 'cardBorderWidth', type: 'number', defaultValue: 1 },

    { name: 'titleColor', type: 'color', defaultValue: '#000' },
    { name: 'titleFontSize', type: 'number', defaultValue: 20 },
    { name: 'titleFontFamily', type: 'text' },

    { name: 'descriptionColor', type: 'color', defaultValue: '#444' },
    { name: 'descriptionFontSize', type: 'number', defaultValue: 16 },
    { name: 'descriptionFontFamily', type: 'text' },

    { name: 'roleColor', type: 'color', defaultValue: '#777' },
    { name: 'roleFontSize', type: 'number', defaultValue: 14 },
    { name: 'roleFontFamily', type: 'text' },

    { name: 'arrowColor', type: 'color', defaultValue: '#000' },
    { name: 'autoplay', type: 'boolean', defaultValue: false },
    { name: 'autoplayDelay', type: 'number', defaultValue: 3000 },
  ],
});

Builder.registerComponent(PremiumTestimonialSlider, {
  name: 'Premium Testimonial Slider',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
        },
        { name: 'text', type: 'text' },
        { name: 'name', type: 'text' },
        { name: 'role', type: 'text' },
        { name: 'stars', type: 'number', defaultValue: 5 },
      ],
    },

    { name: 'desktopItems', type: 'number', defaultValue: 1 },
    { name: 'tabletItems', type: 'number', defaultValue: 1 },
    { name: 'mobileItems', type: 'number', defaultValue: 1 },

    { name: 'showArrows', type: 'boolean', defaultValue: true },
    { name: 'arrowColor', type: 'color' },

    { name: 'autoplay', type: 'boolean' },
    { name: 'autoplayDelay', type: 'number' },

    { name: 'cardBackground', type: 'color' },
    { name: 'cardPadding', type: 'number' },
    { name: 'cardBorderRadius', type: 'number' },

    { name: 'cardShadow', type: 'boolean' },
    { name: 'cardBorder', type: 'boolean' },
    { name: 'cardBorderColor', type: 'color' },
    { name: 'cardBorderWidth', type: 'number' },

    { name: 'quoteColor', type: 'color' },
    { name: 'quoteFontSize', type: 'number' },

    { name: 'textColor', type: 'color' },
    { name: 'textFontSize', type: 'number' },
    { name: 'textFontFamily', type: 'text' },

    { name: 'nameColor', type: 'color' },
    { name: 'nameFontSize', type: 'number' },
    { name: 'nameFontFamily', type: 'text' },

    { name: 'roleColor', type: 'color' },
    { name: 'roleFontSize', type: 'number' },
    { name: 'roleFontFamily', type: 'text' },

    { name: 'starColor', type: 'color' },
    { name: 'starSize', type: 'number' },
  ],
});
