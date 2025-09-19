import{R as e}from"./iframe-CjHYMxdS.js";import"./preload-helper-D9Z9MdNV.js";const m=({isOpen:c=!1,onClose:o,title:l="",size:p="medium",children:u,showCloseButton:g=!0,...h})=>{if(!c)return null;const f=d=>{d.target===d.currentTarget&&o?.()};return e.createElement("div",{className:"reshaped-modal-backdrop",onClick:f},e.createElement("div",{className:`reshaped-modal reshaped-modal--${p}`,...h},e.createElement("div",{className:"reshaped-modal-header"},l&&e.createElement("h2",{className:"reshaped-modal-title"},l),g&&e.createElement("button",{className:"reshaped-modal-close",onClick:o,"aria-label":"Close modal"},"×")),e.createElement("div",{className:"reshaped-modal-content"},u)))};m.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{defaultValue:{value:"false",computed:!1},required:!1},title:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},showCloseButton:{defaultValue:{value:"true",computed:!1},required:!1}}};const T={title:"Reshaped Design System/Modal",component:m,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["small","medium","large","fullscreen"]},showCloseButton:{control:"boolean"},title:{control:"text"}}},s={args:{isOpen:!0,title:"Default Modal",children:"This is a default modal with some content."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},a={args:{isOpen:!0,title:"Small Modal",size:"small",children:"This is a small modal."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},t={args:{isOpen:!0,title:"Large Modal",size:"large",children:"This is a large modal with more space for content."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},n={args:{isOpen:!0,title:"No Close Button",showCloseButton:!1,children:"This modal does not have a close button."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},r={args:{isOpen:!0,children:"This modal does not have a title."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},i={args:{isOpen:!0,title:"Fullscreen Modal",size:"fullscreen",children:"This is a fullscreen modal that takes up most of the viewport."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Default Modal',
    children: 'This is a default modal with some content.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'small',
    children: 'This is a small modal.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'large',
    children: 'This is a large modal with more space for content.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'No Close Button',
    showCloseButton: false,
    children: 'This modal does not have a close button.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: 'This modal does not have a title.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Fullscreen Modal',
    size: 'fullscreen',
    children: 'This is a fullscreen modal that takes up most of the viewport.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...i.parameters?.docs?.source}}};const V=["Default","Small","Large","WithoutCloseButton","WithoutTitle","Fullscreen"];export{s as Default,i as Fullscreen,t as Large,a as Small,n as WithoutCloseButton,r as WithoutTitle,V as __namedExportsOrder,T as default};
